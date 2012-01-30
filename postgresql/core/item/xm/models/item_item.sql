select private.create_model(

-- Model name, schema

'item_item', '', 'xm.item_info, private.docinfo',

E'{
  "docinfo.id as guid",
  "docinfo.source_id as source",
  "item_info as item",
  "docinfo.purpose as purpose"
}',

-- Rules

E'{"

-- insert rules

create or replace rule \\"_CREATE\\" as on insert to xm.item_item
  do instead

insert into private.docinfo (
  id,
  source_id,
  source_type,
  target_id,
  target_type,
  purpose )
values (
  new.guid,
  new.source,
  \'I\',
  (new.item).guid,
  \'I\',
  new.purpose );
  
","

-- update rule

create or replace rule \\"_UPDATE\\" as on update to xm.item_item
  do instead nothing;

","

-- delete rules
  
create or replace rule \\"_DELETE\\" as on delete to xm.item_item
  do instead

delete from private.docinfo
where ( id = old.guid );


"}',

-- Conditions, Comment, System, Nested

E'{"item_info.guid=target_id","docinfo.source_type=\'I\'","docinfo.target_type=\'I\'"}', 'Item Item Model', true, true);