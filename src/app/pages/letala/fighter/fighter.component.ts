import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fighter',
  template: `
    <p>fighter works!</p>
    <table
      class="mw-collapsible"
      style="border: 1px solid #B0BEC5; background: #eeeeee;"
      width="100%"
      cellspacing="0"
      cellpadding="3"
      align="center"
    >
      <tbody>
        <tr>
          <th colspan="2" align="center">
            <span
              class="mw-collapsible-toggle mw-collapsible-toggle-expanded"
              role="button"
              tabindex="0"
              ><span>[</span><a class="mw-collapsible-text">Collapse</a
              ><span>]</span></span
            ><b>USSR fighters</b>
          </th>
        </tr>
        <tr style="">
          <td
            style="background:#DBE0E2;border-top: 1px solid #B0BEC5;"
            width="15%"
            align="right"
          >
            I-15&nbsp;
          </td>
          <td
            style="background:#f6f6f6; border-top: 1px solid #B0BEC5; border-left: 1px solid #B0BEC5; padding-left:7px; padding-right:7px"
          >
            <a href="/I-15_WR" title="I-15 WR">I-15&nbsp;WR</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/I-15_M-22" title="I-15 M-22">I-15&nbsp;M-22</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/I-15_M-25" title="I-15 M-25">I-15 M-25</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/I-15bis" title="I-15bis">I-15bis</a>
          </td>
        </tr>
        <tr style="">
          <td style="background:#DBE0E2;" width="15%" align="right">
            I-153&nbsp;
          </td>
          <td
            style="background:#f6f6f6; border-left: 1px solid #B0BEC5; padding-left:7px; padding-right:7px"
          >
            <a href="/I-153_M-62" title="I-153 M-62">I-153&nbsp;M-62</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/Zhukovsky%27s_I-153-M62" title="Zhukovsky's I-153-M62"
              >Zhukovsky's I-153-M62</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/I-153P" title="I-153P">I-153P</a>
          </td>
        </tr>
        <tr style="">
          <td style="background:#DBE0E2;" width="15%" align="right">
            I-16&nbsp;
          </td>
          <td
            style="background:#f6f6f6; border-left: 1px solid #B0BEC5; padding-left:7px; padding-right:7px"
          >
            <a href="/I-16_type_5" title="I-16 type 5">I-16&nbsp;type&nbsp;5</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/I-16_type_10" title="I-16 type 10"
              >I-16&nbsp;type&nbsp;10</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/I-16_type_18" title="I-16 type 18"
              >I-16&nbsp;type&nbsp;18</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/I-16_type_24" title="I-16 type 24"
              >I-16&nbsp;type&nbsp;24</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/I-16_type_27" title="I-16 type 27"
              >I-16&nbsp;type&nbsp;27</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/I-16_type_28" title="I-16 type 28"
              >I-16&nbsp;type&nbsp;28</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/I-180S" title="I-180S">I-180S</a>
          </td>
        </tr>
        <tr style="">
          <td style="background:#DBE0E2;" width="15%" align="right">
            I-29&nbsp;
          </td>
          <td
            style="background:#f6f6f6; border-left: 1px solid #B0BEC5; padding-left:7px; padding-right:7px"
          >
            <a href="/I-29" title="I-29">I-29</a>
          </td>
        </tr>
        <tr style="">
          <td style="background:#DBE0E2;" width="15%" align="right">
            I-185&nbsp;
          </td>
          <td
            style="background:#f6f6f6; border-left: 1px solid #B0BEC5; padding-left:7px; padding-right:7px"
          >
            <a href="/I-185_(M-71)" title="I-185 (M-71)">I-185 (M-71)</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/I-185_(M-82)" title="I-185 (M-82)">I-185 (M-82)</a>
          </td>
        </tr>
        <tr style="">
          <td style="background:#DBE0E2;" width="15%" align="right">
            I-225&nbsp;
          </td>
          <td
            style="background:#f6f6f6; border-left: 1px solid #B0BEC5; padding-left:7px; padding-right:7px"
          >
            <a href="/I-225" title="I-225">I-225</a>
          </td>
        </tr>
        <tr style="">
          <td style="background:#DBE0E2;" width="15%" align="right">
            ITP&nbsp;
          </td>
          <td
            style="background:#f6f6f6; border-left: 1px solid #B0BEC5; padding-left:7px; padding-right:7px"
          >
            <a href="/ITP_(M-1)" title="ITP (M-1)">ITP (M-1)</a>
          </td>
        </tr>
        <tr style="">
          <td style="background:#DBE0E2;" width="15%" align="right">
            MiG-3&nbsp;
          </td>
          <td
            style="background:#f6f6f6; border-left: 1px solid #B0BEC5; padding-left:7px; padding-right:7px"
          >
            <a href="/MiG-3-15" title="MiG-3-15">MiG-3-15</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/MiG-3-15_(BK)" title="MiG-3-15 (BK)">MiG-3-15 (BK)</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/MiG-3-34" title="MiG-3-34">MiG-3-34</a>
          </td>
        </tr>
        <tr style="">
          <td style="background:#DBE0E2;" width="15%" align="right">
            LaGG&nbsp;
          </td>
          <td
            style="background:#f6f6f6; border-left: 1px solid #B0BEC5; padding-left:7px; padding-right:7px"
          >
            <a href="/I-301" title="I-301">I-301</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/LaGG-3-4" title="LaGG-3-4">LaGG-3-4</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/LaGG-3-8" title="LaGG-3-8">LaGG-3-8</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/LaGG-3-11" title="LaGG-3-11">LaGG-3-11</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/LaGG-3-23" title="LaGG-3-23">LaGG-3-23</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/LaGG-3-34" title="LaGG-3-34">LaGG-3-34</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/LaGG-3-35" title="LaGG-3-35">LaGG-3-35</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/LaGG-3-66" title="LaGG-3-66">LaGG-3-66</a>
          </td>
        </tr>
        <tr style="">
          <td style="background:#DBE0E2;" width="15%" align="right">
            La&nbsp;
          </td>
          <td
            style="background:#f6f6f6; border-left: 1px solid #B0BEC5; padding-left:7px; padding-right:7px"
          >
            <a href="/La-5" title="La-5">La-5</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/La-5F" title="La-5F">La-5F</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/La-5FN" title="La-5FN">La-5FN</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/La-7" title="La-7">La-7</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/Dolgushin%27s_La-7" title="Dolgushin's La-7"
              >Dolgushin's La-7</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/La-7B-20" title="La-7B-20">La-7B-20</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/La-9" title="La-9">La-9</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/La-11" title="La-11">La-11</a>
          </td>
        </tr>
        <tr style="">
          <td style="background:#DBE0E2;" width="15%" align="right">
            Yak-1/7&nbsp;
          </td>
          <td
            style="background:#f6f6f6; border-left: 1px solid #B0BEC5; padding-left:7px; padding-right:7px"
          >
            <a href="/Yak-1" title="Yak-1">Yak-1</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/Yak-1B" title="Yak-1B">Yak-1B</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/Yak-7B" title="Yak-7B">Yak-7B</a>
          </td>
        </tr>
        <tr style="">
          <td style="background:#DBE0E2;" width="15%" align="right">
            Yak-3&nbsp;
          </td>
          <td
            style="background:#f6f6f6; border-left: 1px solid #B0BEC5; padding-left:7px; padding-right:7px"
          >
            <a href="/Yak-3" title="Yak-3">Yak-3</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/Yak-3P" title="Yak-3P">Yak-3P</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/Yak-3T" title="Yak-3T">Yak-3T</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/Yak-3U" title="Yak-3U">Yak-3U</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/Yak-3_(VK-107)" title="Yak-3 (VK-107)">Yak-3 (VK-107)</a>
          </td>
        </tr>
        <tr style="">
          <td style="background:#DBE0E2;" width="15%" align="right">
            Yak-9&nbsp;
          </td>
          <td
            style="background:#f6f6f6; border-left: 1px solid #B0BEC5; padding-left:7px; padding-right:7px"
          >
            <a href="/Yak-9" title="Yak-9">Yak-9</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/Yak-9B" title="Yak-9B">Yak-9B</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/Golovachev%27s_Yak-9M" title="Golovachev's Yak-9M"
              >Golovachev's Yak-9M</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/Yak-9T" title="Yak-9T">Yak-9T</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/Yak-9K" title="Yak-9K">Yak-9K</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/Yak-9U" title="Yak-9U">Yak-9U</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/Yak-9UT" title="Yak-9UT">Yak-9UT</a
            ><span style="font-weight:bold;">&nbsp;·</span>
            <a href="/Yak-9P" title="Yak-9P">Yak-9P</a>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [],
})
export class FighterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
