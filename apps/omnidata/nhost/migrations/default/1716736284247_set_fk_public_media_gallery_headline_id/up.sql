alter table "public"."media_gallery"
  add constraint "media_gallery_headline_id_fkey"
  foreign key ("headline_id")
  references "public"."translated_text"
  ("id") on update restrict on delete restrict;
