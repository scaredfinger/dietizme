alter table "public"."venue_usps_line"
  add constraint "venue_usps_line_headline_id_fkey"
  foreign key ("headline_id")
  references "public"."venue_usps_line_headline"
  ("id") on update restrict on delete restrict;
