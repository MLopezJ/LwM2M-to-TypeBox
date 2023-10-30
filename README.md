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
export const Geolocation = Type.Object({
  Latitude: Type.Integer({
    description:
      "The decimal notation of latitude, e.g. -43.5723 [World Geodetic System 1984].",
  }),
  Longitude: Type.Integer({
    description:
      "The decimal notation of longitude, e.g. 153.21760 [World Geodetic System 1984].",
  }),
  Altitude: Type.Optional(
    Type.Integer({
      description:
        "The decimal notation of altitude in meters above sea level.",
    })
  ),
  Radius: Type.Optional(
    Type.Integer({
      description:
        "The value in this resource indicates the radius of a circular area in meters. The circular area is used to describe uncertainty about a point for coordinates in a two-dimensional coordinate reference systems (CRS). The center point of a circular area is specified by using the Latitude and the Longitude Resources.",
    })
  ),
  Speed: Type.Optional(
    Type.Integer({
      description: "Speed is the time rate of change in position.",
    })
  ),
  Heading: Type.Optional(
    Type.Integer({
      description: "The angle of movement.",
    })
  ),
  Timestamp: Type.Integer({
    description:
      "The timestamp of when the location measurement was performed.",
  }),
});
```
