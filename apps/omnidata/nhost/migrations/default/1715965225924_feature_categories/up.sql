-- Insert the root categories
insert into category (id, parent_id, path) values ('PRODUCT_TYPES', NULL, 'PRODUCT_TYPES');
insert into category (id, parent_id, path) values ('FEATURE_GROUPS', NULL, 'FEATURE_GROUPS');

-- Detailed Product Types Level 1
insert into category (id, parent_id, path) values ('ACCOMMODATIONS', 'PRODUCT_TYPES', 'PRODUCT_TYPES.ACCOMMODATIONS');
insert into category (id, parent_id, path) values ('RENTALS', 'PRODUCT_TYPES', 'PRODUCT_TYPES.RENTALS');
insert into category (id, parent_id, path) values ('ACTIVITIES', 'PRODUCT_TYPES', 'PRODUCT_TYPES.ACTIVITIES');
insert into category (id, parent_id, path) values ('EVENTS', 'PRODUCT_TYPES', 'PRODUCT_TYPES.EVENTS');
insert into category (id, parent_id, path) values ('WELLNESS_AND_SPA', 'PRODUCT_TYPES', 'PRODUCT_TYPES.WELLNESS_AND_SPA');
insert into category (id, parent_id, path) values ('TRANSPORTATION_SERVICES', 'PRODUCT_TYPES', 'PRODUCT_TYPES.TRANSPORTATION_SERVICES');
insert into category (id, parent_id, path) values ('CULINARY_EXPERIENCES', 'PRODUCT_TYPES', 'PRODUCT_TYPES.CULINARY_EXPERIENCES');
insert into category (id, parent_id, path) values ('EDUCATIONAL_SERVICES', 'PRODUCT_TYPES', 'PRODUCT_TYPES.EDUCATIONAL_SERVICES');
insert into category (id, parent_id, path) values ('HEALTHCARE_SERVICES', 'PRODUCT_TYPES', 'PRODUCT_TYPES.HEALTHCARE_SERVICES');
insert into category (id, parent_id, path) values ('PROFESSIONAL_SERVICES', 'PRODUCT_TYPES', 'PRODUCT_TYPES.PROFESSIONAL_SERVICES');

-- Level 2 categories under Accommodations
insert into category (id, parent_id, path) values ('HOTELS', 'ACCOMMODATIONS', 'PRODUCT_TYPES.ACCOMMODATIONS.HOTELS');
insert into category (id, parent_id, path) values ('VILLAS', 'ACCOMMODATIONS', 'PRODUCT_TYPES.ACCOMMODATIONS.VILLAS');
insert into category (id, parent_id, path) values ('APARTMENTS', 'ACCOMMODATIONS', 'PRODUCT_TYPES.ACCOMMODATIONS.APARTMENTS');
insert into category (id, parent_id, path) values ('HOSTELS', 'ACCOMMODATIONS', 'PRODUCT_TYPES.ACCOMMODATIONS.HOSTELS');
insert into category (id, parent_id, path) values ('BED_AND_BREAKFASTS', 'ACCOMMODATIONS', 'PRODUCT_TYPES.ACCOMMODATIONS.BED_AND_BREAKFASTS');

-- Level 2 categories under Rentals
insert into category (id, parent_id, path) values ('VEHICLE_RENTALS', 'RENTALS', 'PRODUCT_TYPES.RENTALS.VEHICLE_RENTALS');
insert into category (id, parent_id, path) values ('EQUIPMENT_RENTALS', 'RENTALS', 'PRODUCT_TYPES.RENTALS.EQUIPMENT_RENTALS');

-- Level 2 categories under Activities
insert into category (id, parent_id, path) values ('OUTDOOR_ADVENTURES', 'ACTIVITIES', 'PRODUCT_TYPES.ACTIVITIES.OUTDOOR_ADVENTURES');
insert into category (id, parent_id, path) values ('TOURS', 'ACTIVITIES', 'PRODUCT_TYPES.ACTIVITIES.TOURS');
insert into category (id, parent_id, path) values ('CLASSES_WORKSHOPS', 'ACTIVITIES', 'PRODUCT_TYPES.ACTIVITIES.CLASSES_WORKSHOPS');

-- Level 2 categories under Events
insert into category (id, parent_id, path) values ('CORPORATE_EVENTS', 'EVENTS', 'PRODUCT_TYPES.EVENTS.CORPORATE_EVENTS');
insert into category (id, parent_id, path) values ('PRIVATE_EVENTS', 'EVENTS', 'PRODUCT_TYPES.EVENTS.PRIVATE_EVENTS');
insert into category (id, parent_id, path) values ('PUBLIC_EVENTS', 'EVENTS', 'PRODUCT_TYPES.EVENTS.PUBLIC_EVENTS');

-- Feature Groups
insert into category (id, parent_id, path) values ('AMENITIES', 'FEATURE_GROUPS', 'FEATURE_GROUPS.AMENITIES');
insert into category (id, parent_id, path) values ('SAFETY', 'FEATURE_GROUPS', 'FEATURE_GROUPS.SAFETY');
insert into category (id, parent_id, path) values ('POLICIES', 'FEATURE_GROUPS', 'FEATURE_GROUPS.POLICIES');
insert into category (id, parent_id, path) values ('CAPACITY', 'FEATURE_GROUPS', 'FEATURE_GROUPS.CAPACITY');
insert into category (id, parent_id, path) values ('SIZE', 'FEATURE_GROUPS', 'FEATURE_GROUPS.SIZE');
insert into category (id, parent_id, path) values ('ACCESSIBILITY', 'FEATURE_GROUPS', 'FEATURE_GROUPS.ACCESSIBILITY');
insert into category (id, parent_id, path) values ('EQUIPMENT', 'FEATURE_GROUPS', 'FEATURE_GROUPS.EQUIPMENT');
insert into category (id, parent_id, path) values ('INSURANCE', 'FEATURE_GROUPS', 'FEATURE_GROUPS.INSURANCE');
insert into category (id, parent_id, path) values ('FOOD_BEVERAGE', 'FEATURE_GROUPS', 'FEATURE_GROUPS.FOOD_BEVERAGE');
insert into category (id, parent_id, path) values ('USER_DEFINED', 'FEATURE_GROUPS', 'FEATURE_GROUPS.USER_DEFINED');
