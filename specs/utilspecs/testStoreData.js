module.exports = {
    "entities": {
        "experiments": {
            "88152": {
                "depVars": [
                    581056
                ],
                "indVars": [
                    "VkprU1_Zx"
                ],
                "name": "My Experiment Test",
                "hypothesis": "test hyp",
                "cause": "causal cause",
                "effect": "effectual effect"
            },
            "562eb105403223fa6eec74f6": {
                "_id": "562eb105403223fa6eec74f6",
                "name": "paper chaser scale",
                "hypothesis": "something",
                "kind": "ad_hoc",
                "__v": 0,
                "indVars": [
                    "562eb105403223fa6eec74f7"
                ],
                "depVars": [
                    "562eb105403223fa6eec74f9"
                ]
            },
            "562eb105403223fa6eec74ff": {
                "_id": "562eb105403223fa6eec74ff",
                "name": "paper chaser list",
                "hypothesis": "something",
                "kind": "ad_hoc",
                "__v": 0,
                "indVars": [
                    "562eb105403223fa6eec7500"
                ],
                "depVars": [
                    "562eb105403223fa6eec7502"
                ]
            },
            "562eb105403223fa6eec7508": {
                "_id": "562eb105403223fa6eec7508",
                "name": "paper chaser",
                "hypothesis": "something",
                "kind": "ad_hoc",
                "__v": 0,
                "indVars": [
                    "562eb105403223fa6eec7509"
                ],
                "depVars": [
                    "562eb105403223fa6eec750b"
                ]
            },
            "VkprU1_Zx": {
                "name": "thingy"
            }
        },
        "depVars": {
            "581056": {
                "measures": [
                    519716,
                    609680
                ],
                "name": "depvarA"
            },
            "562eb105403223fa6eec74f9": {
                "name": "distance",
                "_id": "562eb105403223fa6eec74f9",
                "measures": [
                    "562eb105403223fa6eec74fa"
                ]
            },
            "562eb105403223fa6eec7502": {
                "name": "distance",
                "_id": "562eb105403223fa6eec7502",
                "measures": [
                    "562eb105403223fa6eec7503"
                ]
            },
            "562eb105403223fa6eec750b": {
                "name": "distance",
                "_id": "562eb105403223fa6eec750b",
                "measures": [
                    "562eb105403223fa6eec750c"
                ]
            }
        },
        "indVars": {
            "562eb105403223fa6eec74f7": {
                "name": "Weight",
                "numTrials": 1,
                "randomized": true,
                "_id": "562eb105403223fa6eec74f7",
                "reminders": [
                    "562eb105403223fa6eec74f8"
                ],
                "actionsPerTrial": 1,
                "options": [
                    "1g",
                    "2g"
                ]
            },
            "562eb105403223fa6eec7500": {
                "name": "Weight",
                "numTrials": 1,
                "randomized": true,
                "_id": "562eb105403223fa6eec7500",
                "reminders": [
                    "562eb105403223fa6eec7501"
                ],
                "actionsPerTrial": 1,
                "options": [
                    "1g",
                    "2g"
                ]
            },
            "562eb105403223fa6eec7509": {
                "name": "Weight",
                "numTrials": 1,
                "randomized": true,
                "_id": "562eb105403223fa6eec7509",
                "reminders": [
                    "562eb105403223fa6eec750a"
                ],
                "actionsPerTrial": 1,
                "options": [
                    "1g",
                    "2g"
                ]
            },
            "VkprU1_Zx": {
                "options": [],
                "actionsPerTrial": "1",
                "numTrials": "10"
            }
        },
        "measures": {
            "519716": {
                "list": [
                    "one",
                    "two",
                    "three"
                ],
                "kind": "list"
            },
            "609680": {
                "list": [],
                "kind": "numeric",
                "unit": "meters"
            },
            "562eb105403223fa6eec74fa": {
                "kind": "qualitative",
                "unit": null,
                "_id": "562eb105403223fa6eec74fa",
                "requests": [],
                "samples": [
                    "562eb105403223fa6eec74fd",
                    "562eb105403223fa6eec74fb"
                ],
                "list": null,
                "scale": [
                    1,
                    3,
                    4,
                    6
                ]
            },
            "562eb105403223fa6eec7503": {
                "kind": "list",
                "unit": null,
                "_id": "562eb105403223fa6eec7503",
                "requests": [],
                "samples": [
                    "562eb105403223fa6eec7506",
                    "562eb105403223fa6eec7504"
                ],
                "list": [
                    "somewhere",
                    "overthere",
                    "idontcare"
                ],
                "scale": null
            },
            "562eb105403223fa6eec750c": {
                "kind": "numeric",
                "unit": "feet",
                "_id": "562eb105403223fa6eec750c",
                "requests": [],
                "samples": [
                    "562eb105403223fa6eec750e",
                    "562eb105403223fa6eec750d"
                ],
                "list": null,
                "scale": null
            }
        },
        "requests": [],
        "reminders": {
            "562eb105403223fa6eec74f8": {
                "freq": "everyday2",
                "reminder": "do something here2",
                "_id": "562eb105403223fa6eec74f8"
            },
            "562eb105403223fa6eec7501": {
                "freq": "everyday",
                "reminder": "do something here",
                "_id": "562eb105403223fa6eec7501"
            },
            "562eb105403223fa6eec750a": {
                "freq": null,
                "reminder": null,
                "_id": "562eb105403223fa6eec750a"
            }
        },
        "samples": {
            "562eb105403223fa6eec74fd": {
                "value": 1,
                "_id": "562eb105403223fa6eec74fd",
                "indVarStates": [
                    {
                        "name": "weight",
                        "value": "1g",
                        "_id": "562eb105403223fa6eec74fe"
                    }
                ],
                "time": "2015-10-26T23:02:29.813Z"
            },
            "562eb105403223fa6eec74fb": {
                "value": 3,
                "_id": "562eb105403223fa6eec74fb",
                "indVarStates": [
                    {
                        "name": "weight",
                        "value": "2g",
                        "_id": "562eb105403223fa6eec74fc"
                    }
                ],
                "time": "2015-10-26T23:02:29.812Z"
            },
            "562eb105403223fa6eec7506": {
                "value": "somewhere",
                "_id": "562eb105403223fa6eec7506",
                "indVarStates": [
                    {
                        "name": "weight",
                        "value": "1g",
                        "_id": "562eb105403223fa6eec7507"
                    }
                ],
                "time": "2015-10-26T23:02:29.820Z"
            },
            "562eb105403223fa6eec7504": {
                "value": "overthere",
                "_id": "562eb105403223fa6eec7504",
                "indVarStates": [
                    {
                        "name": "weight",
                        "value": "2g",
                        "_id": "562eb105403223fa6eec7505"
                    }
                ],
                "time": "2015-10-26T23:02:29.819Z"
            },
            "562eb105403223fa6eec750e": {
                "value": 1,
                "_id": "562eb105403223fa6eec750e",
                "indVarStates": [],
                "time": "2015-10-26T23:02:29.824Z"
            },
            "562eb105403223fa6eec750d": {
                "value": 2,
                "_id": "562eb105403223fa6eec750d",
                "indVarStates": [],
                "time": "2015-10-26T23:02:29.824Z"
            }
        }
    },
    "result": {
        "exps": [
            "88152",
            "562eb105403223fa6eec74f6",
            "562eb105403223fa6eec74ff",
            "562eb105403223fa6eec7508",
            "VkprU1_Zx"
        ]
    }
};
