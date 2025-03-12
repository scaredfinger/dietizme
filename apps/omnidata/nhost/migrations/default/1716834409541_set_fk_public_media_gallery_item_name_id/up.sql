alter table "public"."media_gallery_item"
  add constraint "media_gallery_item_name_id_fkey"
  foreign key ("name_id")
  references "public"."translated_text"
  ("id") on update restrict on delete restrict;
