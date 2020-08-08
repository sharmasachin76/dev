package com.sachin.learning.AlienClient;

public class AlienParser {

	private int id;
	private String name;
	private int point;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPoint() {
		return point;
	}
	public void setPoint(int point) {
		this.point = point;
	}
	@Override
	public String toString() {
		return "AlienParser [id=" + id + ", name=" + name + ", point=" + point + "]";
	}
	
	
	
}
