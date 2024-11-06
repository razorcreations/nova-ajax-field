# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## 1.2.2 - 2024-11-06

- Fix to vue-select 3.x returning an instance of the event on change, rather than the updated value

## 1.2.1 - 2024-11-05

- Remove Nova secrets from being required in the CI runner action during Composer setup

## 1.2.0 - 2024-11-05

- Fixed javascript error when inside a flexible componet
- Any Ajax Request results are now stored in a cached variable so label isn't lost on search 
- Use Nova Placeholder before name on search input

## 1.0.1 - 2022-05-11

- Added filterable option flag, contributed by https://github.com/nea

## 1.0.0 - 2022-04-07

- Update to support Nova 4.0 
## 0.3.5 - 2020-08-18

- Fixed bug where if the inital value was an array the options array would not be populated correctly

## 0.3.4 - 2020-08-18

- Rebuilt assets

## 0.3.3 - 2020-08-18

- Removed some left over code

## 0.3.2 - 2020-07-09

- Fixed an empty string value being selected with multi method

## 0.3.1 - 2020-07-09

- Fixed responsive multiselect fields losing their values on search

## 0.3.0 - 2020-07-02

- Add new responsive() method that will trigger ajax select on text change

## 0.2.3 - 2020-07-01

- Dist files updated

## 0.2.2 - 2020-07-01

- Fixed bug with passing params in get request

## 0.2.1 - 2020-07-01

- Add ability to add a parent field reference to pass through filter to ajax endpoint

## 0.2.0 - 2020-06-30

- Added the ability to enable multiselect.
- Fixed `labelKey` missing in vue component.

## 0.1.0 - 2020-06-30

- Initial release.
