/**
 * @generated SignedSource<<3c1e74d0e9452d2b45617976baae2f33>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PosterList_query$data = {
  readonly movies: ReadonlyArray<{
    readonly _id: string;
    readonly name: string;
    readonly cover: string;
  }>;
  readonly " $fragmentType": "PosterList_query";
};
export type PosterList_query$key = {
  readonly " $data"?: PosterList_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"PosterList_query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PosterList_query",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Movie",
      "kind": "LinkedField",
      "name": "movies",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "_id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "cover",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "54e1f8c31965597e41eba9ed69137ee8";

export default node;
