/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export declare namespace ZetaInterfaces {
  export type SendInputStruct = {
    destinationChainId: PromiseOrValue<BigNumberish>;
    destinationAddress: PromiseOrValue<BytesLike>;
    destinationGasLimit: PromiseOrValue<BigNumberish>;
    message: PromiseOrValue<BytesLike>;
    zetaValueAndGas: PromiseOrValue<BigNumberish>;
    zetaParams: PromiseOrValue<BytesLike>;
  };

  export type SendInputStructOutput = [
    BigNumber,
    string,
    BigNumber,
    string,
    BigNumber,
    string
  ] & {
    destinationChainId: BigNumber;
    destinationAddress: string;
    destinationGasLimit: BigNumber;
    message: string;
    zetaValueAndGas: BigNumber;
    zetaParams: string;
  };
}

export interface ZetaConnectorZEVMInterface extends utils.Interface {
  functions: {
    "FUNGIBLE_MODULE_ADDRESS()": FunctionFragment;
    "send((uint256,bytes,uint256,bytes,uint256,bytes))": FunctionFragment;
    "setWzetaAddress(address)": FunctionFragment;
    "wzeta()": FunctionFragment;
    "zetaSentNonce()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "FUNGIBLE_MODULE_ADDRESS"
      | "send"
      | "setWzetaAddress"
      | "wzeta"
      | "zetaSentNonce"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "FUNGIBLE_MODULE_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [ZetaInterfaces.SendInputStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setWzetaAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "wzeta", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "zetaSentNonce",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "FUNGIBLE_MODULE_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setWzetaAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wzeta", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "zetaSentNonce",
    data: BytesLike
  ): Result;

  events: {
    "SetWZETA(address)": EventFragment;
    "ZetaSent(address,address,uint256,uint256,bytes,uint256,uint256,bytes,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetWZETA"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ZetaSent"): EventFragment;
}

export interface SetWZETAEventObject {
  wzeta_: string;
}
export type SetWZETAEvent = TypedEvent<[string], SetWZETAEventObject>;

export type SetWZETAEventFilter = TypedEventFilter<SetWZETAEvent>;

export interface ZetaSentEventObject {
  sourceTxOriginAddress: string;
  zetaTxSenderAddress: string;
  eventNonce: BigNumber;
  destinationChainId: BigNumber;
  destinationAddress: string;
  zetaValueAndGas: BigNumber;
  destinationGasLimit: BigNumber;
  message: string;
  zetaParams: string;
}
export type ZetaSentEvent = TypedEvent<
  [
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    string,
    string
  ],
  ZetaSentEventObject
>;

export type ZetaSentEventFilter = TypedEventFilter<ZetaSentEvent>;

export interface ZetaConnectorZEVM extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ZetaConnectorZEVMInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    FUNGIBLE_MODULE_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    send(
      input: ZetaInterfaces.SendInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setWzetaAddress(
      wzeta_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    wzeta(overrides?: CallOverrides): Promise<[string]>;

    zetaSentNonce(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  FUNGIBLE_MODULE_ADDRESS(overrides?: CallOverrides): Promise<string>;

  send(
    input: ZetaInterfaces.SendInputStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setWzetaAddress(
    wzeta_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  wzeta(overrides?: CallOverrides): Promise<string>;

  zetaSentNonce(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    FUNGIBLE_MODULE_ADDRESS(overrides?: CallOverrides): Promise<string>;

    send(
      input: ZetaInterfaces.SendInputStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    setWzetaAddress(
      wzeta_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    wzeta(overrides?: CallOverrides): Promise<string>;

    zetaSentNonce(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "SetWZETA(address)"(wzeta_?: null): SetWZETAEventFilter;
    SetWZETA(wzeta_?: null): SetWZETAEventFilter;

    "ZetaSent(address,address,uint256,uint256,bytes,uint256,uint256,bytes,bytes)"(
      sourceTxOriginAddress?: null,
      zetaTxSenderAddress?: PromiseOrValue<string> | null,
      eventNonce?: null,
      destinationChainId?: PromiseOrValue<BigNumberish> | null,
      destinationAddress?: null,
      zetaValueAndGas?: null,
      destinationGasLimit?: null,
      message?: null,
      zetaParams?: null
    ): ZetaSentEventFilter;
    ZetaSent(
      sourceTxOriginAddress?: null,
      zetaTxSenderAddress?: PromiseOrValue<string> | null,
      eventNonce?: null,
      destinationChainId?: PromiseOrValue<BigNumberish> | null,
      destinationAddress?: null,
      zetaValueAndGas?: null,
      destinationGasLimit?: null,
      message?: null,
      zetaParams?: null
    ): ZetaSentEventFilter;
  };

  estimateGas: {
    FUNGIBLE_MODULE_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    send(
      input: ZetaInterfaces.SendInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setWzetaAddress(
      wzeta_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    wzeta(overrides?: CallOverrides): Promise<BigNumber>;

    zetaSentNonce(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    FUNGIBLE_MODULE_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    send(
      input: ZetaInterfaces.SendInputStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setWzetaAddress(
      wzeta_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    wzeta(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    zetaSentNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
