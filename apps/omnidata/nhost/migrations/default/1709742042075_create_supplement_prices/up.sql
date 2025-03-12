create or replace view supplement_prices
    as 
        select 
	        id,
	        '2000-01-01T00:00' as "from",
	        '2999-01-01T00:00' as "to",
	        price as "value"
	        from supplement;
