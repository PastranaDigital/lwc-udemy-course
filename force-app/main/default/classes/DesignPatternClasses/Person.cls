public with sharing class Person {
  private Id recordId;
  private String firstName;
  private String lastName;
  private Id organizationId;

  public Id getRecordId() {
    return this.recordId;
  }

  public void setRecordId(Id recordId) {
    this.recordId = recordId;
  }

  public String getFirstName() {
    return this.firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return this.lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public Id getOrganizationId() {
    return this.organizationId;
  }

  public void setOrganizationId(Id organizationId) {
    this.organizationId = organizationId;
  }
}
