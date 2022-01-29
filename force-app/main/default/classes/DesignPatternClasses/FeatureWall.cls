public virtual with sharing class FeatureWall {
  @TestVisible
  private static FeatureWall instance;

  @TestVisible
  private FeatureGate userPersonGate;

  public static FeatureWall getInstance() {
    if (instance == null) {
      instance = new FeatureWall();
    }

    return instance;
  }

  public FeatureGate getUserPersonGate() {
    if (this.userPersonGate != null) {
      return this.userPersonGate;
    }

    this.userPersonGate = new UserPersonGate();

    return this.userPersonGate;
  }

  public interface FeatureGate {
    Boolean isEnabled();
    List<FeatureGate> getDependencies();
  }

  private class UserPersonGate implements FeatureGate {
    public Boolean isEnabled() {
      return false;
    }

    public List<FeatureGate> getDependencies() {
      return null;
    }
  }
}
