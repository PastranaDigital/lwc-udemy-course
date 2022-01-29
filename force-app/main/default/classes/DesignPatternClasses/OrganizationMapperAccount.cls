public with sharing class OrganizationMapperAccount implements OrganizationMapper {
  public List<Organization> getOrganizationsByIds(Set<Id> organizationIds) {
    List<Organization> orgs = new List<Organization>();

    for (Account a : [
      SELECT Id, Name
      FROM Account
      WHERE Id IN :organizationIds
    ]) {
      orgs.add(mapAccountToOrganization(a));
    }

    return orgs;
  }

  private Organization mapAccountToOrganization(Account a) {
    Organization o = new Organization();

    o.setRecordId(a.Id);
    o.setName(a.Name);

    return o;
  }
}
