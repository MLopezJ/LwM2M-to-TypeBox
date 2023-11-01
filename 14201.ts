/**
 * Example of TypeScript type generated with TypeBox definition (expected output)
 * This is not the expected output and this file should not be created in any step.
 * It was added just because is easy to read for humans.
 * 
 * 
 * Geolocation
 *
 *
 * Describes the geo location of a device
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/14201.xml
 *
 * ID: 14201
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.1
 * MultipleInstances: false
 * Mandatory: false
 */
export type Geolocation_14201 = Readonly<{
    "0": Latitude_0;
    "1": Longitude_1;
    "9": Timestamp_9;
    "2"?: Altitude_2;
    "3"?: Radius_3;
    "4"?: Speed_4;
    "5"?: Heading_5;
}>;
/**
 * Latitude
 *
 *
 * The decimal notation of latitude, e.g. -43.5723 [World Geodetic System 1984].
 *
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 * Units: lat
 */
type Latitude_0 = number;
/**
 * Longitude
 *
 *
 * The decimal notation of longitude, e.g. 153.21760 [World Geodetic System
 * 1984].
 *
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units: lon
 */
type Longitude_1 = number;
/**
 * Timestamp
 *
 *
 * The timestamp of when the location measurement was performed.
 *
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: true
 */
type Timestamp_9 = number;
/**
 * Altitude
 *
 *
 * The decimal notation of altitude in meters above sea level.
 *
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 * Units: m
 */
type Altitude_2 = number;
/**
 * Radius
 *
 *
 * The value in this resource indicates the radius of a circular area in meters.
 * The circular area is used to describe uncertainty about a point for
 * coordinates in a two-dimensional coordinate reference systems (CRS). The
 * center point of a circular area is specified by using the Latitude and the
 * Longitude Resources.
 *
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 * Units: m
 */
type Radius_3 = number;
/**
 * Speed
 *
 *
 * Speed is the time rate of change in position.
 *
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 * Units: m/s
 */
type Speed_4 = number;
/**
 * Heading
 *
 *
 * The angle of movement.
 *
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 * Units: degrees
 */
type Heading_5 = number;
/**
 * The objectURN for Geolocation
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = "14201:1.1@1.1";
