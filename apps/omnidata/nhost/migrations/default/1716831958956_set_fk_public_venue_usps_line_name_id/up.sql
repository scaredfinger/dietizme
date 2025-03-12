alter table "public"."venue_usps_line"
  add constraint "venue_usps_line_name_id_fkey"
  foreign key ("name_id")
  references "public"."translated_text"
  ("id") on update restrict on delete restrict;
