CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE public.booking_state (
	id text NOT NULL,
	description text NOT NULL,
	CONSTRAINT booking_state_pkey PRIMARY KEY (id)
);

INSERT INTO public.booking_state (id,description) VALUES
	 ('CREATED','Created'),
	 ('ACCEPTED','Accepted'),
	 ('REJECTED','Rejected'),
	 ('CANCELLED','Cancelled');

CREATE TABLE public.organization_socials (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	facebook text NULL,
	twitter text NULL,
	instagram text NULL,
	youtube text NULL,
	CONSTRAINT organization_socials_pkey PRIMARY KEY (id)
);

CREATE TABLE public.place (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	"name" text NOT NULL,
	latitude numeric NOT NULL,
	longitude numeric NOT NULL,
	CONSTRAINT place_pkey PRIMARY KEY (id)
);

CREATE TABLE public.rate_type (
	id text NOT NULL,
	description text NOT NULL,
	CONSTRAINT rate_type_pkey PRIMARY KEY (id)
);

INSERT INTO public.rate_type (id,description) VALUES
	 ('DAILY','Daily'),
	 ('TIME_SLOTS','Time slots'),
	 ('TAXIMETER','Taximeter');

CREATE TABLE public."role" (
	id text NOT NULL,
	description text NOT NULL,
	CONSTRAINT role_pkey PRIMARY KEY (id)
);

INSERT INTO public."role" (id,description) VALUES
	 ('ADMIN','Administrator'),
	 ('EDITOR','Editor'),
	 ('VIEWER','Viewer');

CREATE TABLE public.translated_text (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	en text NULL,
	es text NULL,
	de text NULL,
	fr text NULL,
	CONSTRAINT translated_text_pkey PRIMARY KEY (id)
);

CREATE TABLE public.media_gallery_headline (
	CONSTRAINT media_gallery_headline_pkey PRIMARY KEY (id)
)
INHERITS (public.translated_text);

CREATE TABLE public.media_gallery_item_headline (
	CONSTRAINT media_gallery_item_headline_pkey PRIMARY KEY (id)
)
INHERITS (public.translated_text);

CREATE TABLE public.media_gallery_item_name (
	CONSTRAINT media_gallery_item_name_pkey PRIMARY KEY (id)
)
INHERITS (public.translated_text);

CREATE TABLE public.media_gallery_name (
	CONSTRAINT media_gallery_name_pkey PRIMARY KEY (id)
)
INHERITS (public.translated_text);

CREATE TABLE public.organization_branding_meta_description (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	CONSTRAINT organization_branding_meta_description_pkey PRIMARY KEY (id)
)
INHERITS (public.translated_text);

CREATE TABLE public.organization_branding_meta_title (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	CONSTRAINT organization_branding_meta_title_pkey PRIMARY KEY (id)
)
INHERITS (public.translated_text);

CREATE TABLE public.organization_business_model (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	rate_type text NOT NULL,
	CONSTRAINT organization_business_model_pkey PRIMARY KEY (id),
	CONSTRAINT organization_business_model_rate_type_fkey FOREIGN KEY (rate_type) REFERENCES public.rate_type(id) ON DELETE RESTRICT ON UPDATE RESTRICT
);

CREATE TABLE public.organization_headline (
	CONSTRAINT organization_headline_pkey PRIMARY KEY (id)
)
INHERITS (public.translated_text);

CREATE TABLE public.product_description (
	CONSTRAINT product_description_pkey PRIMARY KEY (id)
)
INHERITS (public.translated_text);

CREATE TABLE public.product_headline (
	CONSTRAINT product_headline_pkey PRIMARY KEY (id)
)
INHERITS (public.translated_text);

CREATE TABLE public.product_name (
	CONSTRAINT product_name_pkey PRIMARY KEY (id)
)
INHERITS (public.translated_text);

CREATE TABLE public.rate_headline (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	CONSTRAINT rate_headline_pkey PRIMARY KEY (id)
)
INHERITS (public.translated_text);

CREATE TABLE public.rate_name (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	CONSTRAINT rate_name_pkey PRIMARY KEY (id)
)
INHERITS (public.translated_text);

CREATE TABLE public.venue_description (
	CONSTRAINT venue_description_pkey PRIMARY KEY (id)
)
INHERITS (public.translated_text);

CREATE TABLE public.venue_facility_headline (
	CONSTRAINT venue_facility_headline_pkey PRIMARY KEY (id)
)
INHERITS (public.translated_text);

CREATE TABLE public.venue_facility_name (
	CONSTRAINT venue_facility_name_pkey PRIMARY KEY (id)
)
INHERITS (public.translated_text);

CREATE TABLE public.venue_good_to_know (
	CONSTRAINT venue_good_to_know_pkey PRIMARY KEY (id)
)
INHERITS (public.translated_text);

CREATE TABLE public.venue_usps_line_headline (
	CONSTRAINT venue_usps_line_headline_pkey PRIMARY KEY (id)
)
INHERITS (public.translated_text);

CREATE TABLE public.venue_usps_line_name (
	CONSTRAINT venue_usps_line_name_pkey PRIMARY KEY (id)
)
INHERITS (public.translated_text);

CREATE TABLE public.media_gallery (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	name_id uuid NOT NULL,
	headline_id uuid NOT NULL,
	CONSTRAINT media_gallery_pkey PRIMARY KEY (id),
	CONSTRAINT media_gallery_headline_id_fkey FOREIGN KEY (headline_id) REFERENCES public.media_gallery_headline(id) ON DELETE RESTRICT ON UPDATE RESTRICT,
	CONSTRAINT media_gallery_name_id_fkey FOREIGN KEY (name_id) REFERENCES public.media_gallery_name(id) ON DELETE RESTRICT ON UPDATE RESTRICT
);

CREATE TABLE public.booking (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	organization_id uuid NOT NULL,
	state text NOT NULL,
	created_on timestamptz NOT NULL,
	last_modified_on timestamptz NOT NULL,
	contact_id uuid NOT NULL,
	amount numeric NOT NULL,
	friendly_id text NOT NULL,
	CONSTRAINT booking_pkey PRIMARY KEY (id)
);
CREATE UNIQUE INDEX friendly_id_ukey ON public.booking USING btree (organization_id, friendly_id);

CREATE TABLE public.booking_history_entry (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	booking_id uuid NOT NULL,
	"type" text NOT NULL,
	value json NOT NULL,
	"timestamp" timestamptz NOT NULL DEFAULT now(),
	user_id uuid NULL,
	CONSTRAINT booking_history_entry_pkey PRIMARY KEY (id)
);

CREATE TABLE public.booking_product (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	search_params json NOT NULL,
	rate_id uuid NOT NULL,
	price numeric NOT NULL,
	booking_id uuid NOT NULL,
	explained_search_params json NOT NULL DEFAULT '{}'::json,
	starts_on timestamp NOT NULL,
	ends_on timestamp NOT NULL,
	quantity numeric NOT NULL,
	CONSTRAINT booking_products_pkey PRIMARY KEY (id)
);

CREATE TABLE public.contact (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	organization_id uuid NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT contact_pkey PRIMARY KEY (id)
);

CREATE TABLE public.media_gallery_item (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	name_id uuid NOT NULL,
	headline_id uuid NOT NULL,
	file_id uuid NOT NULL,
	gallery_id uuid NOT NULL,
	"position" numeric NOT NULL DEFAULT '0'::numeric,
	CONSTRAINT media_gallery_item_pkey PRIMARY KEY (id)
);

CREATE TABLE public.my_web_section (
	organization_id uuid NOT NULL,
	section_id text NOT NULL,
	value json NOT NULL,
	CONSTRAINT my_web_section_pkey PRIMARY KEY (organization_id, section_id)
);

CREATE TABLE public.organization (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	"name" text NOT NULL,
	headline_id uuid NOT NULL,
	branding_id uuid NOT NULL,
	"email" text NULL,
	phone_number text NULL,
	socials_id uuid NOT NULL,
	business_model_id uuid NULL,
	CONSTRAINT organization_branding_id_key UNIQUE (branding_id),
	CONSTRAINT organization_name_key UNIQUE (name),
	CONSTRAINT organization_pkey PRIMARY KEY (id)
);

CREATE TABLE public.organization_branding (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	logo_id uuid NULL,
	logo_light_id uuid NULL,
	favicon_id uuid NULL,
	meta_title_id uuid NOT NULL,
	meta_description_id uuid NULL,
	CONSTRAINT organization_branding_pkey PRIMARY KEY (id)
);

CREATE TABLE public.organization_member (
	organization_id uuid NOT NULL,
	user_id uuid NOT NULL,
	"role" text NOT NULL,
	CONSTRAINT organization_member_pkey PRIMARY KEY (organization_id, user_id)
);

CREATE TABLE public.product (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	price_from numeric NOT NULL,
	organization_id uuid NOT NULL,
	name_id uuid NOT NULL,
	headline_id uuid NOT NULL,
	description_id uuid NOT NULL,
	gallery_id uuid NOT NULL,
	CONSTRAINT product_content_pkey PRIMARY KEY (id)
);

CREATE TABLE public.product_allotment_range (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	product_id uuid NOT NULL,
	"from" timestamp NOT NULL,
	"to" timestamp NOT NULL,
	value int4 NOT NULL,
	CONSTRAINT product_allotment_range_pkey PRIMARY KEY (id)
);

CREATE TABLE public.rate (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	product_id uuid NOT NULL,
	name_id uuid NOT NULL,
	headline_id uuid NULL,
	"configuration" jsonb NULL,
	availability_rules jsonb NULL,
	price_rules jsonb NULL,
	CONSTRAINT rate_pkey PRIMARY KEY (id)
);

CREATE TABLE public.rate_price_range (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	rate_id uuid NOT NULL,
	"from" timestamp NOT NULL,
	"to" timestamp NOT NULL,
	hourly numeric NOT NULL DEFAULT '0'::numeric,
	daily numeric NOT NULL DEFAULT '0'::numeric,
	CONSTRAINT rate_price_range_pkey PRIMARY KEY (id)
);

CREATE TABLE public.site (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	organization_id uuid NOT NULL,
	url text NOT NULL,
	CONSTRAINT site_pkey PRIMARY KEY (id)
);

CREATE TABLE public.venue (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	organization_id uuid NOT NULL,
	gallery_id uuid NULL,
	usps_id uuid NOT NULL,
	description_id uuid NOT NULL,
	good_to_know_id uuid NOT NULL,
	place_id uuid NOT NULL,
	CONSTRAINT venue_pkey PRIMARY KEY (id)
);

CREATE TABLE public.venue_facility (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	venue_id uuid NOT NULL,
	name_id uuid NOT NULL,
	headline_id uuid NOT NULL,
	image_id uuid NOT NULL,
	"position" int2 NOT NULL,
	CONSTRAINT venue_facility_pkey PRIMARY KEY (id)
);
CREATE TABLE public.venue_usps (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	image_id uuid NULL,
	CONSTRAINT venue_usps_pkey PRIMARY KEY (id)
);

CREATE TABLE public.venue_usps_line (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	venue_usps_id uuid NOT NULL,
	name_id uuid NOT NULL,
	headline_id uuid NOT NULL,
	"position" int2 NOT NULL,
	CONSTRAINT venue_usps_line_pkey PRIMARY KEY (id)
);

-- public.booking foreign keys

ALTER TABLE public.booking ADD CONSTRAINT booking_contact_id_fkey FOREIGN KEY (contact_id) REFERENCES public.contact(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.booking ADD CONSTRAINT booking_organization_id_fkey FOREIGN KEY (organization_id) REFERENCES public.organization(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.booking ADD CONSTRAINT booking_state_fkey FOREIGN KEY (state) REFERENCES public.booking_state(id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- public.booking_history_entry foreign keys

ALTER TABLE public.booking_history_entry ADD CONSTRAINT booking_history_entry_booking_id_fkey FOREIGN KEY (booking_id) REFERENCES public.booking(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.booking_history_entry ADD CONSTRAINT booking_history_entry_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- public.booking_product foreign keys

ALTER TABLE public.booking_product ADD CONSTRAINT booking_products_booking_id_fkey FOREIGN KEY (booking_id) REFERENCES public.booking(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.booking_product ADD CONSTRAINT booking_products_rate_id_fkey FOREIGN KEY (rate_id) REFERENCES public.rate(id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- public.contact foreign keys

ALTER TABLE public.contact ADD CONSTRAINT contact_organization_id_fkey FOREIGN KEY (organization_id) REFERENCES public.organization(id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- public.media_gallery_item foreign keys

ALTER TABLE public.media_gallery_item ADD CONSTRAINT media_gallery_item_file_id_fkey FOREIGN KEY (file_id) REFERENCES "storage".files(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.media_gallery_item ADD CONSTRAINT media_gallery_item_gallery_id_fkey FOREIGN KEY (gallery_id) REFERENCES public.media_gallery(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.media_gallery_item ADD CONSTRAINT media_gallery_item_headline_id_fkey FOREIGN KEY (headline_id) REFERENCES public.media_gallery_item_headline(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.media_gallery_item ADD CONSTRAINT media_gallery_item_name_id_fkey FOREIGN KEY (name_id) REFERENCES public.media_gallery_item_name(id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- public.my_web_section foreign keys

ALTER TABLE public.my_web_section ADD CONSTRAINT my_web_section_organization_id_fkey FOREIGN KEY (organization_id) REFERENCES public.organization(id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- public.organization foreign keys

ALTER TABLE public.organization ADD CONSTRAINT organization_branding_id_fkey FOREIGN KEY (branding_id) REFERENCES public.organization_branding(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.organization ADD CONSTRAINT organization_business_model_id_fkey FOREIGN KEY (business_model_id) REFERENCES public.organization_business_model(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.organization ADD CONSTRAINT organization_headline_id_fkey FOREIGN KEY (headline_id) REFERENCES public.organization_headline(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.organization ADD CONSTRAINT organization_socials_id_fkey FOREIGN KEY (socials_id) REFERENCES public.organization_socials(id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- public.organization_branding foreign keys

ALTER TABLE public.organization_branding ADD CONSTRAINT organization_branding_favicon_id_fkey FOREIGN KEY (favicon_id) REFERENCES "storage".files(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.organization_branding ADD CONSTRAINT organization_branding_logo_id_fkey FOREIGN KEY (logo_id) REFERENCES "storage".files(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.organization_branding ADD CONSTRAINT organization_branding_logo_light_id_fkey FOREIGN KEY (logo_light_id) REFERENCES "storage".files(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.organization_branding ADD CONSTRAINT organization_branding_meta_description_id_fkey FOREIGN KEY (meta_description_id) REFERENCES public.organization_branding_meta_description(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.organization_branding ADD CONSTRAINT organization_branding_meta_title_id_fkey FOREIGN KEY (meta_title_id) REFERENCES public.organization_branding_meta_title(id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- public.organization_member foreign keys

ALTER TABLE public.organization_member ADD CONSTRAINT organization_member_organization_id_fkey FOREIGN KEY (organization_id) REFERENCES public.organization(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.organization_member ADD CONSTRAINT organization_member_role_fkey FOREIGN KEY ("role") REFERENCES public."role"(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.organization_member ADD CONSTRAINT organization_member_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- public.product foreign keys

ALTER TABLE public.product ADD CONSTRAINT product_content_organization_id_fkey FOREIGN KEY (organization_id) REFERENCES public.organization(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.product ADD CONSTRAINT product_description_id_fkey FOREIGN KEY (description_id) REFERENCES public.product_description(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.product ADD CONSTRAINT product_gallery_id_fkey FOREIGN KEY (gallery_id) REFERENCES public.media_gallery(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.product ADD CONSTRAINT product_headline_id_fkey FOREIGN KEY (headline_id) REFERENCES public.product_headline(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.product ADD CONSTRAINT product_name_id_fkey FOREIGN KEY (name_id) REFERENCES public.product_name(id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- public.product_allotment_range foreign keys

ALTER TABLE public.product_allotment_range ADD CONSTRAINT product_allotment_range_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- public.rate foreign keys

ALTER TABLE public.rate ADD CONSTRAINT rate_headline_id_fkey FOREIGN KEY (headline_id) REFERENCES public.rate_headline(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.rate ADD CONSTRAINT rate_name_id_fkey FOREIGN KEY (name_id) REFERENCES public.rate_name(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.rate ADD CONSTRAINT rate_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- public.rate_price_range foreign keys

ALTER TABLE public.rate_price_range ADD CONSTRAINT rate_price_range_rate_id_fkey FOREIGN KEY (rate_id) REFERENCES public.rate(id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- public.site foreign keys

ALTER TABLE public.site ADD CONSTRAINT site_organization_id_fkey FOREIGN KEY (organization_id) REFERENCES public.organization(id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- public.venue foreign keys

ALTER TABLE public.venue ADD CONSTRAINT venue_description_id_fkey FOREIGN KEY (description_id) REFERENCES public.venue_description(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.venue ADD CONSTRAINT venue_gallery_id_fkey FOREIGN KEY (gallery_id) REFERENCES public.media_gallery(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.venue ADD CONSTRAINT venue_good_to_know_id_fkey FOREIGN KEY (good_to_know_id) REFERENCES public.venue_good_to_know(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.venue ADD CONSTRAINT venue_organization_id_fkey FOREIGN KEY (organization_id) REFERENCES public.organization(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.venue ADD CONSTRAINT venue_place_id_fkey FOREIGN KEY (place_id) REFERENCES public.place(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.venue ADD CONSTRAINT venue_venue_usps_id_fkey FOREIGN KEY (usps_id) REFERENCES public.venue_usps(id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- public.venue_facility foreign keys

ALTER TABLE public.venue_facility ADD CONSTRAINT venue_facility_headline_id_fkey FOREIGN KEY (headline_id) REFERENCES public.venue_facility_headline(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.venue_facility ADD CONSTRAINT venue_facility_image_id_fkey FOREIGN KEY (image_id) REFERENCES "storage".files(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.venue_facility ADD CONSTRAINT venue_facility_name_id_fkey FOREIGN KEY (name_id) REFERENCES public.venue_facility_name(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.venue_facility ADD CONSTRAINT venue_facility_venue_id_fkey FOREIGN KEY (venue_id) REFERENCES public.venue(id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- public.venue_usps foreign keys

ALTER TABLE public.venue_usps ADD CONSTRAINT venue_usps_image_id_fkey FOREIGN KEY (image_id) REFERENCES "storage".files(id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- public.venue_usps_line foreign keys

ALTER TABLE public.venue_usps_line ADD CONSTRAINT venue_usps_line_headline_id_fkey FOREIGN KEY (headline_id) REFERENCES public.venue_usps_line_headline(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.venue_usps_line ADD CONSTRAINT venue_usps_line_name_id_fkey FOREIGN KEY (name_id) REFERENCES public.venue_usps_line_name(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE public.venue_usps_line ADD CONSTRAINT venue_usps_line_venue_usps_id_fkey FOREIGN KEY (venue_usps_id) REFERENCES public.venue_usps(id) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- Booking events

CREATE SCHEMA booking_events;

CREATE TABLE booking_events.event_type (
	id text NOT NULL,
	description text NOT NULL,
	CONSTRAINT event_type_pkey PRIMARY KEY (id)
);

INSERT INTO booking_events.event_type (id,description) VALUES
	 ('CREATED','Created'),
	 ('ACCEPTED','Accepted'),
	 ('REJECTED','Rejected'),
	 ('OWNER_CANCELLED','Owner cancelled'),
	 ('CUSTOMER_CANCELLED','Customer cancelled');

CREATE TABLE booking_events.main (
	id uuid NOT NULL DEFAULT gen_random_uuid(),
	booking_id uuid NOT NULL,
	"version" int4 NOT NULL,
	payload json NOT NULL,
	"type" text NOT NULL,
	user_id uuid NULL,
	"timestamp" timestamptz NOT NULL DEFAULT now(),
	CONSTRAINT main_booking_id_version_key UNIQUE (booking_id, version),
	CONSTRAINT main_pkey PRIMARY KEY (id),
	CONSTRAINT version_ge_zero CHECK ((version >= 0))
);

-- booking_events.main foreign keys

ALTER TABLE booking_events.main ADD CONSTRAINT main_type_fkey FOREIGN KEY ("type") REFERENCES booking_events.event_type(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE booking_events.main ADD CONSTRAINT main_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
