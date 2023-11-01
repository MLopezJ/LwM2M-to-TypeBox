# Converter: from LwM2M to TypeBox

## About
Generate typebox types given an XML definition of an LwM2M object.

This converter will be used as part of the effort to visualice arbitrary device data on [hello.nrfcloud.com/map](https://github.com/hello-nrfcloud/proto)

## Expected Input

```xml
<?xml version="1.0" encoding="UTF-8"?>
<LWM2M
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="https://openmobilealliance.org/tech/profiles/LWM2M-v1_1.xsd">
	<Object ObjectType="MODefinition">
		<Name>Geolocation</Name>
		<Description1>
			<![CDATA[Describes the geo location of a device]]>
		</Description1>
		<ObjectID>14201</ObjectID>
		<ObjectURN>urn:oma:lwm2m:x:14201</ObjectURN>
		<LWM2MVersion>1.1</LWM2MVersion>
		<ObjectVersion>1.1</ObjectVersion>
		<MultipleInstances>Single</MultipleInstances>
		<Mandatory>Optional</Mandatory>
		<Resources>
			<Item ID="0">
				<Name>Latitude</Name>
				<Operations>R</Operations>
				<MultipleInstances>Single</MultipleInstances>
				<Mandatory>Mandatory</Mandatory>
				<Type>Float</Type>
				<RangeEnumeration></RangeEnumeration>
				<Units>lat</Units>
				<Description>
					<![CDATA[The decimal notation of latitude, e.g. -43.5723 [World Geodetic System 1984].]]>
				</Description>
			</Item>
			<Item ID="1">
				<Name>Longitude</Name>
				<Operations>R</Operations>
				<MultipleInstances>Single</MultipleInstances>
				<Mandatory>Mandatory</Mandatory>
				<Type>Float</Type>
				<RangeEnumeration></RangeEnumeration>
				<Units>lon</Units>
				<Description>
					<![CDATA[The decimal notation of longitude, e.g. 153.21760 [World Geodetic System 1984].]]>
				</Description>
			</Item>
			<Item ID="2">
				<Name>Altitude</Name>
				<Operations>R</Operations>
				<MultipleInstances>Single</MultipleInstances>
				<Mandatory>Optional</Mandatory>
				<Type>Float</Type>
				<RangeEnumeration></RangeEnumeration>
				<Units>m</Units>
				<Description>
					<![CDATA[The decimal notation of altitude in meters above sea level.]]>
				</Description>
			</Item>
			<Item ID="3">
				<Name>Radius</Name>
				<Operations>R</Operations>
				<MultipleInstances>Single</MultipleInstances>
				<Mandatory>Optional</Mandatory>
				<Type>Float</Type>
				<RangeEnumeration></RangeEnumeration>
				<Units>m</Units>
				<Description>
					<![CDATA[The value in this resource indicates the radius of a circular area in meters. The circular area is used to describe uncertainty about a point for coordinates in a two-dimensional coordinate reference systems (CRS). The center point of a circular area is specified by using the Latitude and the Longitude Resources.]]>
				</Description>
			</Item>
			<Item ID="4">
				<Name>Speed</Name>
				<Operations>R</Operations>
				<MultipleInstances>Single</MultipleInstances>
				<Mandatory>Optional</Mandatory>
				<Type>Float</Type>
				<RangeEnumeration></RangeEnumeration>
				<Units>m/s</Units>
				<Description>
					<![CDATA[Speed is the time rate of change in position.]]>
				</Description>
			</Item>
			<Item ID="5">
				<Name>Heading</Name>
				<Operations>R</Operations>
				<MultipleInstances>Single</MultipleInstances>
				<Mandatory>Optional</Mandatory>
				<Type>Float</Type>
				<RangeEnumeration></RangeEnumeration>
				<Units>degrees</Units>
				<Description>
					<![CDATA[The angle of movement.]]>
				</Description>
			</Item>
			<Item ID="9">
				<Name>Timestamp</Name>
				<Operations>R</Operations>
				<MultipleInstances>Single</MultipleInstances>
				<Mandatory>Mandatory</Mandatory>
				<Type>Time</Type>
				<RangeEnumeration></RangeEnumeration>
				<Units></Units>
				<Description>
					<![CDATA[The timestamp of when the location measurement was performed.]]>
				</Description>
			</Item>
		</Resources>
		<Description2></Description2>
	</Object>
</LWM2M>
```

## Expected output

```ts
NodeObject {
  pos: -1,
  end: -1,
  flags: 16,
  modifierFlagsCache: 0,
  transformFlags: 1,
  parent: undefined,
  kind: 265,
  symbol: undefined,
  localSymbol: undefined,
  modifiers: [
    TokenObject {
      pos: -1,
      end: -1,
      flags: 16,
      modifierFlagsCache: 0,
      transformFlags: 0,
      parent: undefined,
      kind: 95
    },
    pos: -1,
    end: -1,
    hasTrailingComma: false,
    transformFlags: 0
  ],
  name: IdentifierObject {
    pos: -1,
    end: -1,
    flags: 16,
    modifierFlagsCache: 0,
    transformFlags: 0,
    parent: undefined,
    kind: 80,
    escapedText: 'Geolocation_14201',
    jsDoc: undefined,
    flowNode: undefined,
    symbol: undefined
  },
  typeParameters: undefined,
  type: NodeObject {
    pos: -1,
    end: -1,
    flags: 16,
    modifierFlagsCache: 0,
    transformFlags: 1,
    parent: undefined,
    kind: 183,
    typeName: IdentifierObject {
      pos: -1,
      end: -1,
      flags: 16,
      modifierFlagsCache: 0,
      transformFlags: 0,
      parent: undefined,
      kind: 80,
      escapedText: 'Readonly',
      jsDoc: undefined,
      flowNode: undefined,
      symbol: undefined
    },
    typeArguments: [
      [NodeObject],
      pos: -1,
      end: -1,
      hasTrailingComma: false,
      transformFlags: 1
    ]
  },
  jsDoc: undefined,
  locals: undefined,
  nextContainer: undefined,
  emitNode: { leadingComments: [ [Object] ] }
} NodeObject {
  pos: -1,
  end: -1,
  flags: 16,
  modifierFlagsCache: 0,
  transformFlags: 1,
  parent: undefined,
  kind: 265,
  symbol: undefined,
  localSymbol: undefined,
  modifiers: undefined,
  name: IdentifierObject {
    pos: -1,
    end: -1,
    flags: 16,
    modifierFlagsCache: 0,
    transformFlags: 0,
    parent: undefined,
    kind: 80,
    escapedText: 'Latitude_0',
    jsDoc: undefined,
    flowNode: undefined,
    symbol: undefined
  },
  typeParameters: undefined,
  type: NodeObject {
    pos: -1,
    end: -1,
    flags: 16,
    modifierFlagsCache: 0,
    transformFlags: 1,
    parent: undefined,
    kind: 183,
    typeName: IdentifierObject {
      pos: -1,
      end: -1,
      flags: 16,
      modifierFlagsCache: 0,
      transformFlags: 0,
      parent: undefined,
      kind: 80,
      escapedText: 'number',
      jsDoc: undefined,
      flowNode: undefined,
      symbol: undefined
    },
    typeArguments: undefined
  },
  jsDoc: undefined,
  locals: undefined,
  nextContainer: undefined,
  emitNode: { leadingComments: [ [Object] ] }
} NodeObject {
  pos: -1,
  end: -1,
  flags: 16,
  modifierFlagsCache: 0,
  transformFlags: 1,
  parent: undefined,
  kind: 265,
  symbol: undefined,
  localSymbol: undefined,
  modifiers: undefined,
  name: IdentifierObject {
    pos: -1,
    end: -1,
    flags: 16,
    modifierFlagsCache: 0,
    transformFlags: 0,
    parent: undefined,
    kind: 80,
    escapedText: 'Longitude_1',
    jsDoc: undefined,
    flowNode: undefined,
    symbol: undefined
  },
  typeParameters: undefined,
  type: NodeObject {
    pos: -1,
    end: -1,
    flags: 16,
    modifierFlagsCache: 0,
    transformFlags: 1,
    parent: undefined,
    kind: 183,
    typeName: IdentifierObject {
      pos: -1,
      end: -1,
      flags: 16,
      modifierFlagsCache: 0,
      transformFlags: 0,
      parent: undefined,
      kind: 80,
      escapedText: 'number',
      jsDoc: undefined,
      flowNode: undefined,
      symbol: undefined
    },
    typeArguments: undefined
  },
  jsDoc: undefined,
  locals: undefined,
  nextContainer: undefined,
  emitNode: { leadingComments: [ [Object] ] }
} NodeObject {
  pos: -1,
  end: -1,
  flags: 16,
  modifierFlagsCache: 0,
  transformFlags: 1,
  parent: undefined,
  kind: 265,
  symbol: undefined,
  localSymbol: undefined,
  modifiers: undefined,
  name: IdentifierObject {
    pos: -1,
    end: -1,
    flags: 16,
    modifierFlagsCache: 0,
    transformFlags: 0,
    parent: undefined,
    kind: 80,
    escapedText: 'Timestamp_9',
    jsDoc: undefined,
    flowNode: undefined,
    symbol: undefined
  },
  typeParameters: undefined,
  type: NodeObject {
    pos: -1,
    end: -1,
    flags: 16,
    modifierFlagsCache: 0,
    transformFlags: 1,
    parent: undefined,
    kind: 183,
    typeName: IdentifierObject {
      pos: -1,
      end: -1,
      flags: 16,
      modifierFlagsCache: 0,
      transformFlags: 0,
      parent: undefined,
      kind: 80,
      escapedText: 'number',
      jsDoc: undefined,
      flowNode: undefined,
      symbol: undefined
    },
    typeArguments: undefined
  },
  jsDoc: undefined,
  locals: undefined,
  nextContainer: undefined,
  emitNode: { leadingComments: [ [Object] ] }
} NodeObject {
  pos: -1,
  end: -1,
  flags: 16,
  modifierFlagsCache: 0,
  transformFlags: 1,
  parent: undefined,
  kind: 265,
  symbol: undefined,
  localSymbol: undefined,
  modifiers: undefined,
  name: IdentifierObject {
    pos: -1,
    end: -1,
    flags: 16,
    modifierFlagsCache: 0,
    transformFlags: 0,
    parent: undefined,
    kind: 80,
    escapedText: 'Altitude_2',
    jsDoc: undefined,
    flowNode: undefined,
    symbol: undefined
  },
  typeParameters: undefined,
  type: NodeObject {
    pos: -1,
    end: -1,
    flags: 16,
    modifierFlagsCache: 0,
    transformFlags: 1,
    parent: undefined,
    kind: 183,
    typeName: IdentifierObject {
      pos: -1,
      end: -1,
      flags: 16,
      modifierFlagsCache: 0,
      transformFlags: 0,
      parent: undefined,
      kind: 80,
      escapedText: 'number',
      jsDoc: undefined,
      flowNode: undefined,
      symbol: undefined
    },
    typeArguments: undefined
  },
  jsDoc: undefined,
  locals: undefined,
  nextContainer: undefined,
  emitNode: { leadingComments: [ [Object] ] }
} NodeObject {
  pos: -1,
  end: -1,
  flags: 16,
  modifierFlagsCache: 0,
  transformFlags: 1,
  parent: undefined,
  kind: 265,
  symbol: undefined,
  localSymbol: undefined,
  modifiers: undefined,
  name: IdentifierObject {
    pos: -1,
    end: -1,
    flags: 16,
    modifierFlagsCache: 0,
    transformFlags: 0,
    parent: undefined,
    kind: 80,
    escapedText: 'Radius_3',
    jsDoc: undefined,
    flowNode: undefined,
    symbol: undefined
  },
  typeParameters: undefined,
  type: NodeObject {
    pos: -1,
    end: -1,
    flags: 16,
    modifierFlagsCache: 0,
    transformFlags: 1,
    parent: undefined,
    kind: 183,
    typeName: IdentifierObject {
      pos: -1,
      end: -1,
      flags: 16,
      modifierFlagsCache: 0,
      transformFlags: 0,
      parent: undefined,
      kind: 80,
      escapedText: 'number',
      jsDoc: undefined,
      flowNode: undefined,
      symbol: undefined
    },
    typeArguments: undefined
  },
  jsDoc: undefined,
  locals: undefined,
  nextContainer: undefined,
  emitNode: { leadingComments: [ [Object] ] }
} NodeObject {
  pos: -1,
  end: -1,
  flags: 16,
  modifierFlagsCache: 0,
  transformFlags: 1,
  parent: undefined,
  kind: 265,
  symbol: undefined,
  localSymbol: undefined,
  modifiers: undefined,
  name: IdentifierObject {
    pos: -1,
    end: -1,
    flags: 16,
    modifierFlagsCache: 0,
    transformFlags: 0,
    parent: undefined,
    kind: 80,
    escapedText: 'Speed_4',
    jsDoc: undefined,
    flowNode: undefined,
    symbol: undefined
  },
  typeParameters: undefined,
  type: NodeObject {
    pos: -1,
    end: -1,
    flags: 16,
    modifierFlagsCache: 0,
    transformFlags: 1,
    parent: undefined,
    kind: 183,
    typeName: IdentifierObject {
      pos: -1,
      end: -1,
      flags: 16,
      modifierFlagsCache: 0,
      transformFlags: 0,
      parent: undefined,
      kind: 80,
      escapedText: 'number',
      jsDoc: undefined,
      flowNode: undefined,
      symbol: undefined
    },
    typeArguments: undefined
  },
  jsDoc: undefined,
  locals: undefined,
  nextContainer: undefined,
  emitNode: { leadingComments: [ [Object] ] }
} NodeObject {
  pos: -1,
  end: -1,
  flags: 16,
  modifierFlagsCache: 0,
  transformFlags: 1,
  parent: undefined,
  kind: 265,
  symbol: undefined,
  localSymbol: undefined,
  modifiers: undefined,
  name: IdentifierObject {
    pos: -1,
    end: -1,
    flags: 16,
    modifierFlagsCache: 0,
    transformFlags: 0,
    parent: undefined,
    kind: 80,
    escapedText: 'Heading_5',
    jsDoc: undefined,
    flowNode: undefined,
    symbol: undefined
  },
  typeParameters: undefined,
  type: NodeObject {
    pos: -1,
    end: -1,
    flags: 16,
    modifierFlagsCache: 0,
    transformFlags: 1,
    parent: undefined,
    kind: 183,
    typeName: IdentifierObject {
      pos: -1,
      end: -1,
      flags: 16,
      modifierFlagsCache: 0,
      transformFlags: 0,
      parent: undefined,
      kind: 80,
      escapedText: 'number',
      jsDoc: undefined,
      flowNode: undefined,
      symbol: undefined
    },
    typeArguments: undefined
  },
  jsDoc: undefined,
  locals: undefined,
  nextContainer: undefined,
  emitNode: { leadingComments: [ [Object] ] }
}

```
