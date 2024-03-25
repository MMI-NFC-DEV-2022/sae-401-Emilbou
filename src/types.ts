export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Films: {
        Row: {
          affiche_film: string | null
          condense_film: string | null
          created_at: string
          date_film: string | null
          description_film: string | null
          duree_film: number | null
          film_personne: number | null
          id: number
          id_Supports_Films: number | null
          nom_film: string | null
        }
        Insert: {
          affiche_film?: string | null
          condense_film?: string | null
          created_at?: string
          date_film?: string | null
          description_film?: string | null
          duree_film?: number | null
          film_personne?: number | null
          id?: number
          id_Supports_Films?: number | null
          nom_film?: string | null
        }
        Update: {
          affiche_film?: string | null
          condense_film?: string | null
          created_at?: string
          date_film?: string | null
          description_film?: string | null
          duree_film?: number | null
          film_personne?: number | null
          id?: number
          id_Supports_Films?: number | null
          nom_film?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Films_film_personne_fkey"
            columns: ["film_personne"]
            isOneToOne: false
            referencedRelation: "Personnes"
            referencedColumns: ["id"]
          },
        ]
      }
      Films_utilisateur: {
        Row: {
          affiche_film: string | null
          condense_film: string | null
          created_at: string
          date_film: string | null
          description_film: string | null
          duree_film: number | null
          film_personne: number | null
          id: number
          id_Supports_Films: number | null
          nom_film: string | null
        }
        Insert: {
          affiche_film?: string | null
          condense_film?: string | null
          created_at?: string
          date_film?: string | null
          description_film?: string | null
          duree_film?: number | null
          film_personne?: number | null
          id?: number
          id_Supports_Films?: number | null
          nom_film?: string | null
        }
        Update: {
          affiche_film?: string | null
          condense_film?: string | null
          created_at?: string
          date_film?: string | null
          description_film?: string | null
          duree_film?: number | null
          film_personne?: number | null
          id?: number
          id_Supports_Films?: number | null
          nom_film?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Films_utilisateur_film_personne_fkey"
            columns: ["film_personne"]
            isOneToOne: false
            referencedRelation: "Personnes"
            referencedColumns: ["id"]
          },
        ]
      }
      Personnes: {
        Row: {
          created_at: string
          date_personne: string | null
          description_personne: string | null
          id: number
          image_personne: string | null
          nom_personne: string | null
          role_personne: string | null
        }
        Insert: {
          created_at?: string
          date_personne?: string | null
          description_personne?: string | null
          id?: number
          image_personne?: string | null
          nom_personne?: string | null
          role_personne?: string | null
        }
        Update: {
          created_at?: string
          date_personne?: string | null
          description_personne?: string | null
          id?: number
          image_personne?: string | null
          nom_personne?: string | null
          role_personne?: string | null
        }
        Relationships: []
      }
      Personnes_Films: {
        Row: {
          created_at: string
          id: number
          id_films: number | null
          id_Personnes: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_films?: number | null
          id_Personnes?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          id_films?: number | null
          id_Personnes?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Personnes_Films_id_Films_fkey"
            columns: ["id_films"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Personnes_Films_id_Personnes_fkey"
            columns: ["id_Personnes"]
            isOneToOne: false
            referencedRelation: "Personnes"
            referencedColumns: ["id"]
          },
        ]
      }
      Plateformes: {
        Row: {
          created_at: string
          id: number
          image_plateforme: string | null
          nom_plateforme: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          image_plateforme?: string | null
          nom_plateforme?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          image_plateforme?: string | null
          nom_plateforme?: string | null
        }
        Relationships: []
      }
      Plateformes_Films: {
        Row: {
          created_at: string
          id: number
          id_films: number | null
          id_plateformes: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_films?: number | null
          id_plateformes?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          id_films?: number | null
          id_plateformes?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Plateformes_Films_id_films_fkey"
            columns: ["id_films"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Plateformes_Films_id_plateformes_fkey"
            columns: ["id_plateformes"]
            isOneToOne: false
            referencedRelation: "Plateformes"
            referencedColumns: ["id"]
          },
        ]
      }
      Supports: {
        Row: {
          created_at: string
          id: number
          image_support: string | null
          nom_support: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          image_support?: string | null
          nom_support?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          image_support?: string | null
          nom_support?: string | null
        }
        Relationships: []
      }
      Supports_Films: {
        Row: {
          created_at: string
          id: number
          id_films: number | null
          id_supports: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_films?: number | null
          id_supports?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          id_films?: number | null
          id_supports?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Supports_Films_id_films_fkey"
            columns: ["id_films"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Supports_Films_id_supports_fkey"
            columns: ["id_supports"]
            isOneToOne: false
            referencedRelation: "Supports"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          user_id: string
        }
        Insert: {
          user_id: string
        }
        Update: {
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
