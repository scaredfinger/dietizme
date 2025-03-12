alter table "public"."media_gallery"
  add constraint "media_gallery_name_id_fkey"
  foreign key ("name_id")
  references "public"."media_gallery_name"
  ("id") on update restrict on delete restrict;
