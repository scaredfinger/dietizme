CREATE TABLE "public"."product_feature" ("product_id" uuid NOT NULL, "feature_id" UUID NOT NULL, "value" jsonb NOT NULL, PRIMARY KEY ("product_id","feature_id") );
