alter table "public"."organization_booking_question"
  add constraint "organization_booking_question_organization_id_fkey"
  foreign key ("organization_id")
  references "public"."organization"
  ("id") on update restrict on delete restrict;
