import { describe, expect, it } from "vitest";
import { toCamelCaseKeys, toSnakeCaseKeys } from "../src"

describe("Object Keys Conversion", () => {
  const sampleObject = {
    user_id: 1,
    user_name: "John Doe",
    user_details: {
      first_name: "John",
      last_name: "Doe",
      address: {
        street_address: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip_code: "12345",
      },
    },
    user_tags: ["admin", "user"],
  };

  it("should convert keys to camelCase", () => {
    const result = toCamelCaseKeys(sampleObject);
    expect(result).toEqual({
      userId: 1,
      userName: "John Doe",
      userDetails: {
        firstName: "John",
        lastName: "Doe",
        address: {
          streetAddress: "123 Main St",
          city: "Anytown",
          state: "CA",
          zipCode: "12345",
        },
      },
      userTags: ["admin", "user"],
    })
  });

  it("should convert keys to snake_case", () => {
    const result = toSnakeCaseKeys(sampleObject);
    expect(result).toEqual(sampleObject)
  })
});