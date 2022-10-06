/*! Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: MIT-0
 */

'use strict'

// The Lambda handler
exports.handler = async (event) => {
  let record = event.Records[0]
  let message = record.body
  if (message.includes("error")) {
    console.log("Function received invalid message: " + message)
    throw 'Message not  valid'
  }
  console.log(JSON.stringify(event, 2, null))
}