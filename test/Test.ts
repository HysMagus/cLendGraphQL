import assert from "assert";
import { 
  TestHelpers,
  AdminUpgradeabilityProxy_AdminChanged
} from "generated";
const { MockDb, AdminUpgradeabilityProxy } = TestHelpers;

describe("AdminUpgradeabilityProxy contract AdminChanged event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for AdminUpgradeabilityProxy contract AdminChanged event
  const event = AdminUpgradeabilityProxy.AdminChanged.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("AdminUpgradeabilityProxy_AdminChanged is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await AdminUpgradeabilityProxy.AdminChanged.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualAdminUpgradeabilityProxyAdminChanged = mockDbUpdated.entities.AdminUpgradeabilityProxy_AdminChanged.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedAdminUpgradeabilityProxyAdminChanged: AdminUpgradeabilityProxy_AdminChanged = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      previousAdmin: event.params.previousAdmin,
      newAdmin: event.params.newAdmin,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualAdminUpgradeabilityProxyAdminChanged, expectedAdminUpgradeabilityProxyAdminChanged, "Actual AdminUpgradeabilityProxyAdminChanged should be the same as the expectedAdminUpgradeabilityProxyAdminChanged");
  });
});
