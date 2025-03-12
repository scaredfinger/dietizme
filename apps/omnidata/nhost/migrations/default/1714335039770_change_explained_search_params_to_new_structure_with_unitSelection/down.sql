-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- begin transaction;
--
-- update booking_events.main
-- set payload = jsonb_set(
--   payload::jsonb,
--   '{items,0,explained_search_params}',
--   case
--     when (payload -> 'items' -> 0 -> 'explained_search_params')::jsonb ? 'units' then
--       jsonb_set(
--         (payload -> 'items' -> 0 -> 'explained_search_params')::jsonb,
--         '{unitSelection}',
--         jsonb_build_object(
--           'units', (payload -> 'items' -> 0 -> 'explained_search_params' -> 'units')::jsonb,
--           'type', 'per-pax'
--         )::jsonb
--       ) - 'units' - 'type'
--     when (payload -> 'items' -> 0 -> 'explained_search_params')::jsonb ? 'quantity' then
--       jsonb_set(
--         (payload -> 'items' -> 0 -> 'explained_search_params')::jsonb,
--         '{unitSelection}',
--         jsonb_build_object(
--           'quantity', (payload -> 'items' -> 0 -> 'explained_search_params' -> 'quantity')::jsonb,
--           'type', 'per-resource'
--         )::jsonb
--       ) - 'quantity' - 'type'
--     else
--       (payload -> 'items' -> 0 -> 'explained_search_params')::jsonb
--   end
-- )
-- where (payload -> 'items' -> 0 -> 'explained_search_params') is not null;
--
-- update public.booking_product
-- set explained_search_params =
--   case
--     when explained_search_params::jsonb ? 'units' then
--       jsonb_set(
--         explained_search_params::jsonb,
--         '{unitSelection}',
--         jsonb_build_object(
--           'units', explained_search_params::jsonb -> 'units',
--           'type', 'per-pax'
--         )::jsonb
--       ) - 'units' - 'type'
--     when explained_search_params::jsonb ? 'quantity' then
--       jsonb_set(
--         explained_search_params::jsonb,
--         '{unitSelection}',
--         jsonb_build_object(
--           'quantity', explained_search_params::jsonb -> 'quantity',
--           'type', 'per-resource'
--         )::jsonb
--       ) - 'quantity' - 'type'
--     else
--       explained_search_params::jsonb
--   end
-- where explained_search_params is not null;
--
-- commit transaction;
