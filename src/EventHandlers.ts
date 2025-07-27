/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  AdminUpgradeabilityProxy,
  AdminUpgradeabilityProxy_AdminChanged,
  AdminUpgradeabilityProxy_CollateralAdded,
  AdminUpgradeabilityProxy_CollateralReclaimed,
  AdminUpgradeabilityProxy_InterestPaid,
  AdminUpgradeabilityProxy_Liquidation,
  AdminUpgradeabilityProxy_LoanTaken,
  AdminUpgradeabilityProxy_LoanTermsChanged,
  AdminUpgradeabilityProxy_NewTokenAdded,
  AdminUpgradeabilityProxy_OwnershipTransferred,
  AdminUpgradeabilityProxy_Repayment,
  AdminUpgradeabilityProxy_TokenCollaterabilityChanged,
  AdminUpgradeabilityProxy_TokenLiquidationBeneficiaryChanged,
  AdminUpgradeabilityProxy_Upgraded,
} from "generated";

AdminUpgradeabilityProxy.AdminChanged.handler(async ({ event, context }) => {
  const entity: AdminUpgradeabilityProxy_AdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousAdmin: event.params.previousAdmin,
    newAdmin: event.params.newAdmin,
  };

  context.AdminUpgradeabilityProxy_AdminChanged.set(entity);
});

AdminUpgradeabilityProxy.CollateralAdded.handler(async ({ event, context }) => {
  const entity: AdminUpgradeabilityProxy_CollateralAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    amount: event.params.amount,
    timestamp: event.params.timestamp,
    addedBy: event.params.addedBy,
  };

  context.AdminUpgradeabilityProxy_CollateralAdded.set(entity);
});

AdminUpgradeabilityProxy.CollateralReclaimed.handler(async ({ event, context }) => {
  const entity: AdminUpgradeabilityProxy_CollateralReclaimed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    amount: event.params.amount,
    timestamp: event.params.timestamp,
    byWho: event.params.byWho,
  };

  context.AdminUpgradeabilityProxy_CollateralReclaimed.set(entity);
});

AdminUpgradeabilityProxy.InterestPaid.handler(async ({ event, context }) => {
  const entity: AdminUpgradeabilityProxy_InterestPaid = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    paidInToken: event.params.paidInToken,
    interestAmountInDAI: event.params.interestAmountInDAI,
    timestamp: event.params.timestamp,
    paidBy: event.params.paidBy,
  };

  context.AdminUpgradeabilityProxy_InterestPaid.set(entity);
});

AdminUpgradeabilityProxy.Liquidation.handler(async ({ event, context }) => {
  const entity: AdminUpgradeabilityProxy_Liquidation = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    userWhoWasLiquidated: event.params.userWhoWasLiquidated,
    totalCollateralValueLiquidated: event.params.totalCollateralValueLiquidated,
    timestamp: event.params.timestamp,
    caller: event.params.caller,
  };

  context.AdminUpgradeabilityProxy_Liquidation.set(entity);
});

AdminUpgradeabilityProxy.LoanTaken.handler(async ({ event, context }) => {
  const entity: AdminUpgradeabilityProxy_LoanTaken = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    amount: event.params.amount,
    timestamp: event.params.timestamp,
    takenBy: event.params.takenBy,
  };

  context.AdminUpgradeabilityProxy_LoanTaken.set(entity);
});

AdminUpgradeabilityProxy.LoanTermsChanged.handler(async ({ event, context }) => {
  const entity: AdminUpgradeabilityProxy_LoanTermsChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousYearlyInterst: event.params.previousYearlyInterst,
    newYearlyInterst: event.params.newYearlyInterst,
    previousLoanDefaultThresholdPercent: event.params.previousLoanDefaultThresholdPercent,
    newLoanDefaultThresholdPercent: event.params.newLoanDefaultThresholdPercent,
    timestamp: event.params.timestamp,
    changedBy: event.params.changedBy,
  };

  context.AdminUpgradeabilityProxy_LoanTermsChanged.set(entity);
});

AdminUpgradeabilityProxy.NewTokenAdded.handler(async ({ event, context }) => {
  const entity: AdminUpgradeabilityProxy_NewTokenAdded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    collaterability: event.params.collaterability,
    liquidationBeneficiary: event.params.liquidationBeneficiary,
    timestamp: event.params.timestamp,
    addedBy: event.params.addedBy,
  };

  context.AdminUpgradeabilityProxy_NewTokenAdded.set(entity);
});

AdminUpgradeabilityProxy.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: AdminUpgradeabilityProxy_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.AdminUpgradeabilityProxy_OwnershipTransferred.set(entity);
});

AdminUpgradeabilityProxy.Repayment.handler(async ({ event, context }) => {
  const entity: AdminUpgradeabilityProxy_Repayment = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    amountTokens: event.params.amountTokens,
    timestamp: event.params.timestamp,
    addedBy: event.params.addedBy,
  };

  context.AdminUpgradeabilityProxy_Repayment.set(entity);
});

AdminUpgradeabilityProxy.TokenCollaterabilityChanged.handler(async ({ event, context }) => {
  const entity: AdminUpgradeabilityProxy_TokenCollaterabilityChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    oldCollaterability: event.params.oldCollaterability,
    newCollaterability: event.params.newCollaterability,
    timestamp: event.params.timestamp,
    changedBy: event.params.changedBy,
  };

  context.AdminUpgradeabilityProxy_TokenCollaterabilityChanged.set(entity);
});

AdminUpgradeabilityProxy.TokenLiquidationBeneficiaryChanged.handler(async ({ event, context }) => {
  const entity: AdminUpgradeabilityProxy_TokenLiquidationBeneficiaryChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    oldBeneficiary: event.params.oldBeneficiary,
    newBeneficiary: event.params.newBeneficiary,
    timestamp: event.params.timestamp,
    changedBy: event.params.changedBy,
  };

  context.AdminUpgradeabilityProxy_TokenLiquidationBeneficiaryChanged.set(entity);
});

AdminUpgradeabilityProxy.Upgraded.handler(async ({ event, context }) => {
  const entity: AdminUpgradeabilityProxy_Upgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    implementation: event.params.implementation,
  };

  context.AdminUpgradeabilityProxy_Upgraded.set(entity);
});
