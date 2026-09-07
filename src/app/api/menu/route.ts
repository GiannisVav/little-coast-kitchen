import { NextResponse } from "next/server";
import { INITIAL_MENU_ITEMS, MENU_CATEGORIES } from "@/lib/menuData";

export async function GET() {
  try {
    // Check if Neon Postgres DATABASE_URL is provided
    const databaseUrl = process.env.DATABASE_URL || process.env.DATABASE_URL_UNPOOLED;
    if (databaseUrl) {
      try {
        const { neon } = await import("@neondatabase/serverless");
        const sql = neon(databaseUrl);
        const dishes = await sql`
          SELECT id, name, category, price, description, image, tags, is_signature AS "isSignature"
          FROM dishes
          ORDER BY id ASC
        `;
        const categories = await sql`
          SELECT name FROM categories ORDER BY sort_order ASC
        `;
        const categoryList = categories.length > 0
          ? ["All", ...categories.map((c: any) => c.name)]
          : MENU_CATEGORIES;

        if (dishes && dishes.length > 0) {
          return NextResponse.json({
            success: true,
            source: "neon-postgres",
            categories: categoryList,
            dishes,
          });
        }
      } catch (dbErr) {
        console.warn("Neon database query failed, falling back:", dbErr);
      }
    }

    // Check if Supabase environment variables are provided
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseAnonKey) {
      try {
        const { createClient } = await import("@supabase/supabase-js");
        const supabase = createClient(supabaseUrl, supabaseAnonKey);
        const { data: dishes, error } = await supabase
          .from("dishes")
          .select("*")
          .order("id", { ascending: true });

        if (!error && dishes && dishes.length > 0) {
          return NextResponse.json({
            success: true,
            source: "supabase",
            categories: MENU_CATEGORIES,
            dishes,
          });
        }
      } catch (dbErr) {
        console.warn("Database query failed, falling back to local dataset:", dbErr);
      }
    }

    // Fallback to local structured menu dataset
    return NextResponse.json({
      success: true,
      source: "fallback",
      categories: MENU_CATEGORIES,
      dishes: INITIAL_MENU_ITEMS,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to load menu" },
      { status: 500 }
    );
  }
}
