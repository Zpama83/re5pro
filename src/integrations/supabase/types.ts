export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      dk_topics: {
        Row: {
          created_at: string
          exam_relevance: Json
          id: string
          legislation: Json
          principle: Json
          regulatory_refs: Json
          related_concepts: string[]
          scenarios: Json
          simulator: Json | null
          slug: string
          sort_order: number
          summary: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          exam_relevance?: Json
          id: string
          legislation?: Json
          principle?: Json
          regulatory_refs?: Json
          related_concepts?: string[]
          scenarios?: Json
          simulator?: Json | null
          slug: string
          sort_order?: number
          summary: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          exam_relevance?: Json
          id?: string
          legislation?: Json
          principle?: Json
          regulatory_refs?: Json
          related_concepts?: string[]
          scenarios?: Json
          simulator?: Json | null
          slug?: string
          sort_order?: number
          summary?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      re1_questions: {
        Row: {
          id: string
          question_number: number | null
          question_text: string
          option_a: string
          option_b: string
          option_c: string
          option_d: string
          correct_answer: string
          explanation: string | null
          complexity_level: number | null
          topic_tag: string | null
          legislative_ref: string | null
          is_active: boolean | null
          created_at: string
        }
        Insert: {
          id?: string
          question_number?: number | null
          question_text: string
          option_a: string
          option_b: string
          option_c: string
          option_d: string
          correct_answer: string
          explanation?: string | null
          complexity_level?: number | null
          topic_tag?: string | null
          legislative_ref?: string | null
          is_active?: boolean | null
          created_at?: string
        }
        Update: {
          id?: string
          question_number?: number | null
          question_text?: string
          option_a?: string
          option_b?: string
          option_c?: string
          option_d?: string
          correct_answer?: string
          explanation?: string | null
          complexity_level?: number | null
          topic_tag?: string | null
          legislative_ref?: string | null
          is_active?: boolean | null
          created_at?: string
        }
        Relationships: []
      }
      re1_user_sessions: {
        Row: {
          id: string
          user_id: string | null
          session_type: string | null
          started_at: string
          completed_at: string | null
          total_questions: number | null
          correct_answers: number | null
          score_percent: number | null
          time_taken_secs: number | null
          answers: Json | null
          topic_breakdown: Json | null
        }
        Insert: {
          id?: string
          user_id?: string | null
          session_type?: string | null
          started_at?: string
          completed_at?: string | null
          total_questions?: number | null
          correct_answers?: number | null
          score_percent?: number | null
          time_taken_secs?: number | null
          answers?: Json | null
          topic_breakdown?: Json | null
        }
        Update: {
          id?: string
          user_id?: string | null
          session_type?: string | null
          started_at?: string
          completed_at?: string | null
          total_questions?: number | null
          correct_answers?: number | null
          score_percent?: number | null
          time_taken_secs?: number | null
          answers?: Json | null
          topic_breakdown?: Json | null
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          user_id: string
          email: string
          exam_track: "RE1" | "RE5" | null
          is_revoked: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id: string
          email: string
          exam_track?: "RE1" | "RE5" | null
          is_revoked?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          user_id?: string
          email?: string
          exam_track?: "RE1" | "RE5" | null
          is_revoked?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      re1_user_question_history: {
        Row: {
          user_id: string
          question_id: string
          attempts: number
          correct_count: number
          last_seen_at: string | null
          last_correct_at: string | null
        }
        Insert: {
          user_id: string
          question_id: string
          attempts?: number
          correct_count?: number
          last_seen_at?: string | null
          last_correct_at?: string | null
        }
        Update: {
          user_id?: string
          question_id?: string
          attempts?: number
          correct_count?: number
          last_seen_at?: string | null
          last_correct_at?: string | null
        }
        Relationships: []
      }
      forum_threads: {
        Row: {
          id: string
          track: string
          day: number | null
          topic_tag: string | null
          type: string
          title: string
          prompt: string | null
          linked_question_id: string | null
          legislative_ref: string | null
          is_pinned: boolean
          created_by: string | null
          created_at: string
        }
        Insert: {
          id?: string
          track: string
          day?: number | null
          topic_tag?: string | null
          type?: string
          title: string
          prompt?: string | null
          linked_question_id?: string | null
          legislative_ref?: string | null
          is_pinned?: boolean
          created_by?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          track?: string
          day?: number | null
          topic_tag?: string | null
          type?: string
          title?: string
          prompt?: string | null
          linked_question_id?: string | null
          legislative_ref?: string | null
          is_pinned?: boolean
          created_by?: string | null
          created_at?: string
        }
        Relationships: []
      }
      forum_posts: {
        Row: {
          id: string
          thread_id: string
          parent_post_id: string | null
          author_id: string | null
          body: string
          is_check_in: boolean
          trust_state: string
          is_accepted: boolean
          upvotes: number
          is_hidden: boolean
          created_at: string
        }
        Insert: {
          id?: string
          thread_id: string
          parent_post_id?: string | null
          author_id?: string | null
          body: string
          is_check_in?: boolean
          trust_state?: string
          is_accepted?: boolean
          upvotes?: number
          is_hidden?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          thread_id?: string
          parent_post_id?: string | null
          author_id?: string | null
          body?: string
          is_check_in?: boolean
          trust_state?: string
          is_accepted?: boolean
          upvotes?: number
          is_hidden?: boolean
          created_at?: string
        }
        Relationships: []
      }
      forum_check_ins: {
        Row: {
          id: string
          user_id: string
          track: string
          day: number
          confidence: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          track: string
          day: number
          confidence?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          track?: string
          day?: number
          confidence?: string | null
          created_at?: string
        }
        Relationships: []
      }
      forum_post_votes: {
        Row: {
          post_id: string
          user_id: string
          value: number
          created_at: string
        }
        Insert: {
          post_id: string
          user_id: string
          value?: number
          created_at?: string
        }
        Update: {
          post_id?: string
          user_id?: string
          value?: number
          created_at?: string
        }
        Relationships: []
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
