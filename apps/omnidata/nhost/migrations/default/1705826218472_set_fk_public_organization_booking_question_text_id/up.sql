alter table "public"."organization_booking_question"
  add constraint "organization_booking_question_text_id_fkey"
  foreign key ("text_id")
  references "public"."translated_text"
  ("id") on update restrict on delete restrict;
