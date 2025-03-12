CREATE TABLE "public"."organization_booking_question" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "type" Text NOT NULL, "scope" text NOT NULL, "value" json NOT NULL, PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;
