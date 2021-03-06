import produce  from "immer";

export interface Adapter {
  kind: AdapterKind;
  method: AdapterMethod;
  args: Array<string>;
};

export enum AdapterKind {
  AAVE = "aave",
  FUND = "fund",
  KYBER = "kyber",
  UNISWAP_1 = "uniswap_1",
  NULL = "",
};

export interface AdapterMethod {
  label: string;
  parameters: Array<string>;
  parameterDescriptions: Array<string>;
  description: string;
};

export function createAdapter(
  kind: AdapterKind,
  method: AdapterMethod,
  args: Array<string>,
): Adapter {
  return <Adapter>{
    kind: kind,
    method: method,
    args: args
  };
}

export function createBlankAdapter(): Adapter {
  return <Adapter>{
    kind: AdapterKind.NULL,
    method: {
      label: "",
      parameters: [],
      parameterDescriptions: [],
      description: ""
    },
    args: []
  }
}

export function cloneAdapter(
  adapter: Adapter,
  kind?: AdapterKind,
  method?: AdapterMethod,
  args?: Array<string>
): Adapter {
  return produce<Adapter, Adapter>(adapter, draft => {
    if (kind) {
      draft.kind = kind;
    }
    if (method) {
      draft.method = method;
    }
    if (args) {
      draft.args = args;
    }
  });
};
