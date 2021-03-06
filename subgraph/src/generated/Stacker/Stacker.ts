// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AdapterAdded extends ethereum.Event {
  get params(): AdapterAdded__Params {
    return new AdapterAdded__Params(this);
  }
}

export class AdapterAdded__Params {
  _event: AdapterAdded;

  constructor(event: AdapterAdded) {
    this._event = event;
  }

  get adapter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get gateway(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class AdapterRemoved extends ethereum.Event {
  get params(): AdapterRemoved__Params {
    return new AdapterRemoved__Params(this);
  }
}

export class AdapterRemoved__Params {
  _event: AdapterRemoved;

  constructor(event: AdapterRemoved) {
    this._event = event;
  }

  get adapter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get gateway(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class CallExecuted extends ethereum.Event {
  get params(): CallExecuted__Params {
    return new CallExecuted__Params(this);
  }
}

export class CallExecuted__Params {
  _event: CallExecuted;

  constructor(event: CallExecuted) {
    this._event = event;
  }

  get stackId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get callAdapter(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get callSig(): string {
    return this._event.parameters[2].value.toString();
  }

  get callArgs(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get incomingAssets(): Array<Address> {
    return this._event.parameters[4].value.toAddressArray();
  }

  get incomingAmounts(): Array<BigInt> {
    return this._event.parameters[5].value.toBigIntArray();
  }

  get outgoingAssets(): Array<Address> {
    return this._event.parameters[6].value.toAddressArray();
  }

  get outgoingAmounts(): Array<BigInt> {
    return this._event.parameters[7].value.toBigIntArray();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class StackExecuted extends ethereum.Event {
  get params(): StackExecuted__Params {
    return new StackExecuted__Params(this);
  }
}

export class StackExecuted__Params {
  _event: StackExecuted;

  constructor(event: StackExecuted) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get stackId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get spendAssets(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }

  get spendAssetBalances(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get callAdapters(): Array<Address> {
    return this._event.parameters[4].value.toAddressArray();
  }

  get callSigs(): Array<string> {
    return this._event.parameters[5].value.toStringArray();
  }

  get callArgs(): Array<Bytes> {
    return this._event.parameters[6].value.toBytesArray();
  }

  get paidOutAssets(): Array<Address> {
    return this._event.parameters[7].value.toAddressArray();
  }

  get paidOutAmounts(): Array<BigInt> {
    return this._event.parameters[8].value.toBigIntArray();
  }
}

export class Stacker extends ethereum.SmartContract {
  static bind(address: Address): Stacker {
    return new Stacker("Stacker", address);
  }

  ETH_ADDRESS(): Address {
    let result = super.call("ETH_ADDRESS", "ETH_ADDRESS():(address)", []);

    return result[0].toAddress();
  }

  try_ETH_ADDRESS(): ethereum.CallResult<Address> {
    let result = super.tryCall("ETH_ADDRESS", "ETH_ADDRESS():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  adapterToGateway(param0: Address): Address {
    let result = super.call(
      "adapterToGateway",
      "adapterToGateway(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toAddress();
  }

  try_adapterToGateway(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "adapterToGateway",
      "adapterToGateway(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  stackId(): BigInt {
    let result = super.call("stackId", "stackId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_stackId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("stackId", "stackId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class AddAdapterCall extends ethereum.Call {
  get inputs(): AddAdapterCall__Inputs {
    return new AddAdapterCall__Inputs(this);
  }

  get outputs(): AddAdapterCall__Outputs {
    return new AddAdapterCall__Outputs(this);
  }
}

export class AddAdapterCall__Inputs {
  _call: AddAdapterCall;

  constructor(call: AddAdapterCall) {
    this._call = call;
  }

  get _adapter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _gateway(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AddAdapterCall__Outputs {
  _call: AddAdapterCall;

  constructor(call: AddAdapterCall) {
    this._call = call;
  }
}

export class ExecuteStackNoPayoutCall extends ethereum.Call {
  get inputs(): ExecuteStackNoPayoutCall__Inputs {
    return new ExecuteStackNoPayoutCall__Inputs(this);
  }

  get outputs(): ExecuteStackNoPayoutCall__Outputs {
    return new ExecuteStackNoPayoutCall__Outputs(this);
  }
}

export class ExecuteStackNoPayoutCall__Inputs {
  _call: ExecuteStackNoPayoutCall;

  constructor(call: ExecuteStackNoPayoutCall) {
    this._call = call;
  }

  get _spendAssets(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _spendAssetBalances(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _callAdapters(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get _callSigs(): Array<string> {
    return this._call.inputValues[3].value.toStringArray();
  }

  get _callArgs(): Array<Bytes> {
    return this._call.inputValues[4].value.toBytesArray();
  }
}

export class ExecuteStackNoPayoutCall__Outputs {
  _call: ExecuteStackNoPayoutCall;

  constructor(call: ExecuteStackNoPayoutCall) {
    this._call = call;
  }
}

export class ExecuteStackCall extends ethereum.Call {
  get inputs(): ExecuteStackCall__Inputs {
    return new ExecuteStackCall__Inputs(this);
  }

  get outputs(): ExecuteStackCall__Outputs {
    return new ExecuteStackCall__Outputs(this);
  }
}

export class ExecuteStackCall__Inputs {
  _call: ExecuteStackCall;

  constructor(call: ExecuteStackCall) {
    this._call = call;
  }

  get _spendAssets(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _spendAssetBalances(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _callAdapters(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get _callSigs(): Array<string> {
    return this._call.inputValues[3].value.toStringArray();
  }

  get _callArgs(): Array<Bytes> {
    return this._call.inputValues[4].value.toBytesArray();
  }
}

export class ExecuteStackCall__Outputs {
  _call: ExecuteStackCall;

  constructor(call: ExecuteStackCall) {
    this._call = call;
  }
}

export class RemoveAdapterCall extends ethereum.Call {
  get inputs(): RemoveAdapterCall__Inputs {
    return new RemoveAdapterCall__Inputs(this);
  }

  get outputs(): RemoveAdapterCall__Outputs {
    return new RemoveAdapterCall__Outputs(this);
  }
}

export class RemoveAdapterCall__Inputs {
  _call: RemoveAdapterCall;

  constructor(call: RemoveAdapterCall) {
    this._call = call;
  }

  get _adapter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveAdapterCall__Outputs {
  _call: RemoveAdapterCall;

  constructor(call: RemoveAdapterCall) {
    this._call = call;
  }
}
