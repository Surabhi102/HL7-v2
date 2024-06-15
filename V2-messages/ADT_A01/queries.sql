select * from hl7_events he 
-- pid = 1
-- encounter_id = 6


/* What are all the tables that we need to get data from for A01*/
-- 1. facility
-- 2. patient
-- 3. form_encounter
-- 4. users 
-- 5. lists for problems, medications
-- 6. lista for diagnosis
-- 7. lists for allergy 


select * from users u 
select * from form_encounter fe 
select * from lists l 

/* Diagnosis Data */
select 
		l3.`type` problem_type,
		SUBSTRING_INDEX(l3.diagnosis, ':', -1) as dg_code,
		l3.title
from lists l3
where l3.`type` = 'medical_problem'
		and LENGTH(TRIM(l3.diagnosis )) > 0
		and l3.pid = 1 
	
/* Allergy Data */
select *  
from lists l2
where l2.`type` = 'allergy'


select option_id, title 
from list_options lo 
