create or replace function replace_special_characters(original_text text) returns text as $$
declare
    result text := original_text;
begin
    -- German replacements
    result := regexp_replace(result, 'ä', 'ae', 'g');
    result := regexp_replace(result, 'ö', 'oe', 'g');
    result := regexp_replace(result, 'ü', 'ue', 'g');
    result := regexp_replace(result, 'ß', 'ss', 'g');
    -- Spanish replacements
    result := regexp_replace(result, 'á', 'a', 'g');
    result := regexp_replace(result, 'é', 'e', 'g');
    result := regexp_replace(result, 'í', 'i', 'g');
    result := regexp_replace(result, 'ó', 'o', 'g');
    result := regexp_replace(result, 'ú', 'u', 'g');
    result := regexp_replace(result, 'ñ', 'n', 'g');
    -- French and additional characters
    result := regexp_replace(result, 'ç', 'c', 'g');
    result := regexp_replace(result, 'à', 'a', 'g');
    result := regexp_replace(result, 'è', 'e', 'g');
    result := regexp_replace(result, 'ì', 'i', 'g');
    result := regexp_replace(result, 'ò', 'o', 'g');
    result := regexp_replace(result, 'ù', 'u', 'g');
    result := regexp_replace(result, 'â', 'a', 'g');
    result := regexp_replace(result, 'ê', 'e', 'g');
    result := regexp_replace(result, 'î', 'i', 'g');
    result := regexp_replace(result, 'ô', 'o', 'g');
    result := regexp_replace(result, 'û', 'u', 'g');
    result := regexp_replace(result, 'ë', 'e', 'g');
    result := regexp_replace(result, 'ï', 'i', 'g');
    result := regexp_replace(result, 'ü', 'u', 'g');
    result := regexp_replace(result, 'ÿ', 'y', 'g');
    return result;
end;
$$ language plpgsql immutable;

-- Example of usage in an update or insert operation
update product_group 
set slug_id = gen_random_uuid()
where slug_id is null;

insert into slug (id, en, es, de, fr)
select
    pg.slug_id,
    lower(regexp_replace(replace_special_characters(pn.en), '[^a-zA-Z0-9]+', '-', 'gi')) as en,
    lower(regexp_replace(replace_special_characters(pn.es), '[^a-zA-Z0-9]+', '-', 'gi')) as es,
    lower(regexp_replace(replace_special_characters(pn.de), '[^a-zA-Z0-9]+', '-', 'gi')) as de,
    lower(regexp_replace(replace_special_characters(pn.fr), '[^a-zA-Z0-9]+', '-', 'gi')) as fr
from product_group pg
join translated_text  pn on pg.name_id = pn.id
where pg.slug_id is not null;

drop function replace_special_characters;
