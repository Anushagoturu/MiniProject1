package com.zensar.service;

import com.zensar.model.Skill;
import com.zensar.repository.SkillRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillService {
    @Autowired
    private SkillRepository skillRepository;

    public List<Skill> getSkills(){
        return skillRepository.findAll();
    }
}