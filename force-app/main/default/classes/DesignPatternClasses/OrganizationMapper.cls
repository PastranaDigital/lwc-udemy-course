public interface OrganizationMapper {
  //   Organization getOrganizationById(Id recordId);

  List<Organization> getOrganizationsByIds(Set<Id> recordIds);
}
