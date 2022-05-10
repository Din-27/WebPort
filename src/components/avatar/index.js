import React from 'react'

function Avatar() {
  return (
    <div className="flex justify-center">
          <div class="avatar-group -space-x-4">
            <div class="avatar">
              <div class="w-12">
                <img src="https://api.lorem.space/image/face?hash=53273" />
              </div>
            </div>
            <div class="avatar">
              <div class="w-12">
                <img src="https://api.lorem.space/image/face?hash=91831" />
              </div>
            </div>
            <div class="avatar">
              <div class="w-12">
                <img src="https://api.lorem.space/image/face?hash=27312" />
              </div>
            </div>
            <div class="avatar">
              <div class="w-12">
                <img src="https://api.lorem.space/image/face?hash=26448" />
              </div>
            </div>
            <div class="avatar placeholder">
                <div class="w-12 bg-neutral-focus text-neutral-content">
                <span>+99</span>
                </div>
            </div>
          </div>
        </div>
  )
}

export default Avatar