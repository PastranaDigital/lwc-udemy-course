public with sharing class Organization {
  private Id recordId;
  private String name;

  public Id getRecordId() {
    return this.recordId;
  }

  public void setRecordId(Id recordId) {
    this.recordId = recordId;
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }
}
