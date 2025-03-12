alter table "public"."media_gallery_item"
  add constraint "media_gallery_item_headline_id_fkey"
  foreign key ("headline_id")
  references "public"."media_gallery_item_headline"
  ("id") on update restrict on delete restrict;
