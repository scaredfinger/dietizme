alter table "public"."organization_booking_question"
  add constraint "organization_booking_question_scope_fkey"
  foreign key ("scope")
  references "public"."booking_question_scope"
  ("id") on update restrict on delete restrict;
