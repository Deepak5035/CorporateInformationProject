package com.cip.repository;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cip.entity.ContactEntity;

public interface ContectRepository extends JpaRepository<ContactEntity, Serializable> {


  }
