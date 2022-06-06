package com.cst.ems.service;

import com.cst.ems.model.Skill;
import com.cst.ems.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillService {
    @Autowired
    private SkillRepository skillRepository;
    
//    public Skill addSkill(Skill skill) {
//    	
//    	return skillRepository.save(skill);
//    }

    public List<Skill> getSkills(){
        return skillRepository.findAll();
    }
}
