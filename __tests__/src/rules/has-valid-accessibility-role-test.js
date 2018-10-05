/* eslint-env jest */
/**
 * @fileoverview Used to tell Talkback or Voiceover the role of a UI Element
 * @author Jen Luker
 */

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import parserOptionsMapper from '../../__util__/parserOptionsMapper';
import rule from '../../../src/rules/has-valid-accessibility-role';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester();

const expectedError = {
  message: 'accessibilityRole must be one of defined values',
  type: 'JSXAttribute',
};

ruleTester.run('has-valid-accessibility-role', rule, {
  valid: [
    { code: '<TouchableOpacity accessibilityRole="adjustable" />;' },
    { code: '<TouchableOpacity accessibilityRole="button" />;' },
    { code: '<TouchableOpacity accessibilityRole="header" />;' },
    { code: '<TouchableOpacity accessibilityRole="image" />;' },
    { code: '<TouchableOpacity accessibilityRole="imagebutton" />;' },
    { code: '<TouchableOpacity accessibilityRole="keyboardkey" />;' },
    { code: '<TouchableOpacity accessibilityRole="link" />;' },
    { code: '<TouchableOpacity accessibilityRole="none" />;' },
    { code: '<TouchableOpacity accessibilityRole="search" />;' },
    { code: '<TouchableOpacity accessibilityRole="summary" />;' },
    { code: '<TouchableOpacity accessibilityRole="text" />;' },
  ].map(parserOptionsMapper),
  invalid: [
    {
      code: '<TouchableOpacity accessibilityRole="duck" />',
      errors: [expectedError],
    },
    {
      code: '<TouchableOpacity accessibilityRole="key" />;',
      errors: [expectedError],
    },
    {
      code: '<TouchableOpacity accessibilityRole="nones" />;',
      errors: [expectedError],
    },
    {
      code: '<TouchableOpacity accessibilityRole="primary-button" />',
      errors: [expectedError],
    },
  ].map(parserOptionsMapper),
});
