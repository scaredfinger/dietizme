alter table "public"."media_gallery"
  add constraint "media_gallery_name_id_fkey"
  foreign key ("name_id")
  references "public"."translated_text"
  ("id") on update restrict on delete restrict;
