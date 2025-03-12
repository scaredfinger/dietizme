update venue_facility 
set slug_id = gen_random_uuid()
where slug_id is null;

insert into slug (id, en, es, de, fr)
select
    vf.slug_id,
    lower(regexp_replace(replace_special_characters(t.en), '[^a-zA-Z0-9]+', '-', 'gi')) as en,
    lower(regexp_replace(replace_special_characters(t.es), '[^a-zA-Z0-9]+', '-', 'gi')) as es,
    lower(regexp_replace(replace_special_characters(t.de), '[^a-zA-Z0-9]+', '-', 'gi')) as de,
    lower(regexp_replace(replace_special_characters(t.fr), '[^a-zA-Z0-9]+', '-', 'gi')) as fr
from venue_facility vf
join translated_text t on vf.name_id = t.id
where vf.slug_id is not null;

select 
s.*
from venue_facility vf 
join slug s on vf.slug_id = s.id;
