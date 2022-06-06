package com.zensar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zensar.model.Skill;

@Repository
public interface SkillRepository extends JpaRepository<Skill,Long> {

}