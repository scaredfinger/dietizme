insert into translated_text 
	(
		select * from venue_usps_line_name 
	);
	
insert into translated_text 
	(
		select * from venue_usps_line_headline
	);
