'use client'

import ExternalLink from '../ExternalLink'

export default function DrowsyBatherDetectionDetails() {
  return (
    <div>
      <p>
        家族が入浴中に寝ていて危険だったことから、入浴中の事故について調べ始め、事故を防ぐために研究を行いました。
        英語で論文を書きました。
      </p>
      <ExternalLink href="https://link.springer.com/chapter/10.1007/978-3-030-50017-7_34">
        Drowsy Bather Detection Using a Triaxial Accelerometer
      </ExternalLink>
      <br />
      <br />
      <p>国際会議でも発表しました。</p>
      <ExternalLink href="https://2020.hci.international/tuesday">
        Human-Computer Interaction International (HCII) 2020
      </ExternalLink>
    </div>
  )
}
