CREATE TABLE "public"."slug" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "en" text NOT NULL, "es" Text NOT NULL, "de" text NOT NULL, "fr" text NOT NULL, PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;
