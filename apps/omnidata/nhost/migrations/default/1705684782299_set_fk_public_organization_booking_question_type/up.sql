alter table "public"."organization_booking_question"
  add constraint "organization_booking_question_type_fkey"
  foreign key ("type")
  references "public"."booking_question_type"
  ("id") on update restrict on delete restrict;
